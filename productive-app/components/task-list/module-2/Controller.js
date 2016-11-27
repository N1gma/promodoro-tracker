export default class Controller {
    constructor(model, eBusLocal) {
        //this.view = view;
        this.model = model;
        this.eBusLocal = eBusLocal;
        this.listeners = {
            editTask: function (e) {
                if (e.target.classList.contains('edit-task')) {
                    Router.showModalEdit(e.target);
                }
            },
            trashDrop: function (e) {
                this.eBusLocal.publish('trash-drop', {
                    e: e,
                    context: this
                })
            }.bind(this),
            showGlobalList: function (e) {
                if (e.target.classList.contains('drop-switch')) {
                    e.target.innerHTML = '<span>Global list</span>&#xe907';
                    document.getElementsByClassName('global-list')[0].classList.toggle('list-hidden')
                }
            },
            moveToDaily: function (e) {
                if (e.target.classList.contains('drag-task')) {
                    var context = this;
                    var target = e.target;
                    while (!target.parentNode.classList.contains('task')) {
                        target = target.parentNode;
                    }
                    var key = target.parentNode.getAttribute('key');
                    var currentDate = new Date();
                    var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    User.setData(User.currentLogin, '/tasks/' + key + '/deadline', {
                        day: currentDate.getDate(),
                        month: monthArray[parseInt(currentDate.getMonth(),10)],
                        year: currentDate.getFullYear(),
                        fullDate: (function () {
                            return monthArray[parseInt(currentDate.getMonth(),10)] + ' ' +
                                    currentDate.getDate()+', '+currentDate.getFullYear();
                        })()
                    })
                }
            }

        };
    }

    initController(callback) {
        this.model.patchList(callback);
    }

    setEventListeners(el) {
        var context = this;
        el.addEventListener('click', this.listeners.editTask);
        el.addEventListener('click', this.listeners.trashDrop);
        el.addEventListener('click', this.listeners.showGlobalList);
        el.addEventListener('click', this.listeners.moveToDaily);
    }

    removeEventListeners(el) {
        var context = this;
        for (var key in this.listeners) {
            el.removeEventListener('click', this.listeners[key])
        }
    }
}


