export default class Controller {
    constructor(model,view, eBusLocal) {
        //this.view = view;
        this.model = model;
        this.view = view;
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
            showGlobalList: this.view.showGlobalList,
            moveToDaily: this.view.moveToDaily

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


