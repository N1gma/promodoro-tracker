/**
 * @class
 */
class UserClass {
    constructor() {
        this.currentLogin = '';
        this.settings = {};
        this.trashData = [];
        this.reportsData = {};
        this.dataSnapShot = {};
    }

    /**
     * Get settings from firebase User profile
     *
     * @memberOf UserClass
     * @param {String} account
     * @param {function} callback callback to execute after success GET req
     */
    getSettings(account, callback) {
        var data = database.ref('users/' + account + '/user_settings');
        data.on('value', function (snapshot) {
            this.settings = snapshot.val();
            callback(this.settings);
        }.bind(this));
    }

    /**
     * Save settings in firebase User profile
     *
     * @memberOf UserClass
     */
    saveSettings() {
        var context = this;
        database.ref('users/' + this.currentLogin + '/user_settings').set(this.settings)
            .then(function () {
                app.EventBus.publish('notify', {
                    msg: 'Settings saved',
                    type: 'info'
                });
            });
        localStorage.setItem('prodApp', JSON.stringify({
            dataSnapShot: context.dataSnapShot,
            settings: context.settings
        }));
    }

    /**
     * Get requested data from firebase User profile
     *
     * @memberOf UserClass
     * @param {String} account
     * @param {String} data
     * @param {function} callback callback to execute after success GET req
     */
    getData(account, data, callback) {
        var info = database.ref('users/' + account + '/' + data);
        info.on('value', function (snapshot) {
            this.dataSnapShot = snapshot.val();
            callback(this.dataSnapShot);
        }.bind(this));
    }

    /**
     * Set task data in firebase tasks User profile after moving to daily
     *
     * @memberOf UserClass
     * @param {String} account
     * @param {String} path
     * @param {String} data
     */
    setData(account, path, data) {
        database.ref('users/' + account + path).set(data)
            .then(function () {
                app.EventBus.publish('notify', {
                    msg: 'Moved to daily list',
                    type: 'info'
                });
            });
    }

    /**
     * Set task data in firebase tasks User profile after edit
     *
     * @memberOf UserClass
     * @param {String} account
     * @param {String} path
     * @param {HTMLElement} [node]
     */
    setTaskData(account, path, node) {
        database.ref('users/' + account + path).set((function () {
            var newData = {
                title: document.getElementById('title-input').value,
                description: document.getElementById('description-input').value,
                category: (function () {
                    var tag = document.getElementsByClassName('categories-choose-list')[0];
                    for (var i = 0; i < tag.children.length; i++) {
                        if (tag.children[i].firstElementChild.checked) {
                            console.log(tag.children[i].firstElementChild);
                            return tag.children[i].firstElementChild.value.toLowerCase();
                        }
                    }
                })(),
                deadline: (function () {
                    var date = document.getElementById('deadline-input').value;
                    var obj = {
                        fullDate: date,
                        month: date.slice(0, date.indexOf(' ')),
                        day: date.slice(date.indexOf(' ') + 1, date.indexOf(',')),
                        year: date.slice(date.indexOf(',') + 2)
                    };
                    return obj;
                })(),
                estimation: (function () {
                    var parent = document.getElementsByClassName('estimation-range')[0];
                    for (var i = 0, j = 0; parent.children[i]; i++) {
                        if (parent.children[i].classList.contains('estimated')) {
                            j++;
                        }
                    }
                    return 'estimate-' + j;
                })(),
                priority: (function () {
                    var tag = document.getElementsByClassName('categories-choose-list')[1];
                    for (var i = 0; i < tag.children.length; i++) {
                        if (tag.children[i].firstElementChild.checked) {
                            console.log(tag.children[i].firstElementChild);
                            return tag.children[i].firstElementChild.value.toLowerCase();
                        }
                    }
                })()
            };
            console.log(newData);
            return newData;
        })()).then(function () {
            app.EventBus.publish('notify', {
                msg: 'Task edited',
                type: 'info'
            });
        });
    }

    /**
     * Delete task  in firebase tasks User profile
     *
     * @memberOf UserClass
     * @param {String} account
     * @param {String} path
     */
    deleteTaskData(account, path) {
        database.ref('users/' + account + path).remove()
            .then(function () {
                app.EventBus.publish('notify', {
                    msg: 'Task deleted',
                    type: 'warning'
                });
            });
    }

    /**
     * Add task  in firebase tasks User profile after task add from modal
     *
     * @memberOf UserClass
     */
    updateTasksData() {
        var context = this;
        var path = 'users/' + this.currentLogin + '/tasks';
        var newKey = database.ref().child(path).push().key;
        path += '/' + newKey;
        var newData = {
            title: document.getElementById('title-input').value,
            description: document.getElementById('title-input').value,
            category: (function () {
                var tag = document.getElementsByClassName('categories-choose-list')[0];
                for (var i = 0; i < tag.children.length; i++) {
                    if (tag.children[i].firstElementChild.checked) {
                        console.log(tag.children[i].firstElementChild);
                        return tag.children[i].firstElementChild.value.toLowerCase();
                    }
                }
            })(),
            deadline: (function () {
                var date = document.getElementById('deadline-input').value;
                var obj = {
                    fullDate: date,
                    month: date.slice(0, date.indexOf(' ')),
                    day: date.slice(date.indexOf(' ') + 1, date.indexOf(',')),
                    year: date.slice(date.indexOf(',') + 2)
                };
                return obj;
            })(),
            estimation: 'estimate-' + document.getElementsByClassName('estimation-range')[0].estimation,
            priority: (function () {
                var tag = document.getElementsByClassName('categories-choose-list')[1];
                for (var i = 0; i < tag.children.length; i++) {
                    if (tag.children[i].firstElementChild.checked) {
                        console.log(tag.children[i].firstElementChild);
                        return tag.children[i].firstElementChild.value.toLowerCase();
                    }
                }
            })()
        };
        database.ref(path).update(newData)
            .then(function () {
                app.EventBus.publish('notify', {
                    msg: 'Task added',
                    type: 'success'
                });
            });
        localStorage.setItem('prodApp', JSON.stringify({
            dataSnapShot: context.dataSnapShot,
            settings: context.settings
        }));
    }
}

(function () {
    /**
     * @memberOf app
     * @type {UserClass}
     */
    app.User = new UserClass();
}());
