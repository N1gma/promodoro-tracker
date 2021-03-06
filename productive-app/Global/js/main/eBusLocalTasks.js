/**
 * @class
 */
class CEventBusLocal {
    constructor() {
        this.topics = {};
        this.resolvedCount = 0;
    }

    /**
     * @memberOf CEventBusLocal
     * @param {String} topic
     * @param {function} listener
     */
    subscribe(topic, listener) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(listener);
        return this;
    }

    /**
     * @memberOf CEventBusLocal
     * @param {String} topic
     * @param  [data]
     */
    publish(topic, data) {
        if (!this.topics[topic] || this.topics[topic].length < 1) {
            return;
        }
        this.topics[topic].forEach(function (listener) {
            listener(data || {});
        });
    }

    /**
     * @memberOf CEventBusLocal
     * @param {String} topic
     */
    unsubscribe(topic) {
        delete this.topics[topic];
    }
}

(function (app) {
    /**
     * @memberOf app
     * @type {CEventBusLocal}
     */
    app.EventBusLocal = new CEventBusLocal();
    var EventBusLocal = app.EventBusLocal;
    var ifSolvedThen = app.Renderer.helpers.ifSolvedThen;
    var User = app.User;
    EventBusLocal
        .subscribe('trash-drop', function (data) {
            var e = data.e;
            var context = data.context;
            if (e.target.classList.contains('category') && !e.target.classList.contains('toogled') && e.target.parentNode.classList.contains('trash')) {
                e.target.innerHTML = '&#xe910;';
                e.target.classList.add('toogled');
                if (context.model.checkTrashBuffer(e.target.parentNode.getAttribute('key'))) {
                    User.trashData.push(e.target.parentNode.getAttribute('key'));
                    if (User.trashData.length > 0) {
                        document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
                        document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
                    } else {
                        document.getElementsByClassName('trash-counter')[0].style.display = 'none';
                    }
                    console.log(User.trashData);
                }
            } else if (e.target.classList.contains('toogled') && e.target.parentNode.classList.contains('trash')) {
                e.target.innerHTML = '&#xe912;';
                e.target.classList.remove('toogled');
                User.trashData.splice(User.trashData.indexOf(e.target.parentNode.getAttribute('key')), 1);
                if (User.trashData.length > 0) {
                    document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
                    document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
                } else {
                    document.getElementsByClassName('trash-counter')[0].style.display = 'none';
                }
                console.log(User.trashData);
            }
        })
        .subscribe('trash-check-all', function (dependency) {
            var elems = document.getElementsByClassName('task');
            for (var i = 0; i < elems.length; i++) {
                if (elems[i].parentNode.classList.contains(dependency)) {
                    elems[i].firstElementChild.innerHTML = '&#xe910;';
                    elems[i].firstElementChild.classList.add('toogled');
                    var key = elems[i].getAttribute('key');
                    if (User.trashData.indexOf(key) === -1) {
                        User.trashData.push(key);
                        if (User.trashData.length > 0) {
                            document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
                            document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
                        } else {
                            document.getElementsByClassName('trash-counter')[0].style.display = 'none';
                        }
                        console.log(User.trashData);
                    }
                }
            }
        })
        .subscribe('trash-uncheck-all', function (dependency) {
            var elems = document.getElementsByClassName('task');
            for (var i = 0; i < elems.length; i++) {
                if (elems[i].parentNode.classList.contains(dependency)) {
                    elems[i].firstElementChild.innerHTML = '&#xe912;';
                    elems[i].firstElementChild.classList.remove('toogled');
                    var key = elems[i].getAttribute('key');
                    console.log(key);
                    if (User.trashData.indexOf(key) !== -1) {
                        User.trashData.splice(User.trashData.indexOf(key), 1);
                        if (User.trashData.length > 0) {
                            document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
                            document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
                        } else {
                            document.getElementsByClassName('trash-counter')[0].style.display = 'none';
                        }
                        console.log(User.trashData);
                    }
                }
            }
        })
        .subscribe('trash-refresh', function (e) {
            document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
            document.getElementsByClassName('trash-counter')[0].style.display = 'none';
            User.trashData = [];
        })
        .subscribe('trash-on', function (target) {
            var tasks = document.getElementsByClassName('task');
            target.classList.add('active');

            for (var i = 0; i < tasks.length; i++) {
                tasks[i].classList.add('trash');
            }

            var labels = document.getElementsByClassName('left-side');
            for (i = 0; i < labels.length; i++) {
                labels[i].classList.remove('hidden');

            }
        })
        .subscribe('trash-off', function (target) {
            var tasks = document.getElementsByClassName('task');
            target.classList.remove('active');

            for (var i = 0; i < tasks.length; i++) {
                tasks[i].classList.remove('trash');
            }
            var labels = document.getElementsByClassName('left-side');
            for (i = 0; i < labels.length; i++) {
                labels[i].classList.add('hidden');
            }
        })
        .subscribe('actionResolved', function () {
            EventBusLocal.resolvedCount++;
            console.log(EventBusLocal.resolvedCount);
        })
}(window.app));



