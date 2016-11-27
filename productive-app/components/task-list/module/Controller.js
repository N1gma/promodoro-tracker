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
            }.bind(this)
        };

    }

    initController(callback) {
        EventBusLocal.publish('trash-refresh', document.getElementById('trashOn'));
        this.model.patchList(callback);
        //this.view.showList
    }

    setEventListeners(el) {
        var context = this;
        el.addEventListener('click', this.listeners.editTask);
        el.addEventListener('click', this.listeners.trashDrop);
    }

    removeEventListeners(el) {
        var context = this;
        for (var key in this.listeners) {
            el.removeEventListener('click', this.listeners[key]);
        }
    }
}


