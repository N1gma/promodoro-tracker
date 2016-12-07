export default class Controller {
    constructor(model, view, eBusLocal, template) {
        //this.view = view;
        this.template = template;
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
        el.addEventListener('click', this.listeners.moveToDaily);
        EventBusLocal.subscribe('filter-tasks', function (type) {
            console.log('filter ' + type)
            console.log(this)
            this.initController(function () {
                if (context.model.data) {
                    el.innerHTML = context.template({
                        data: context.model.data,
                        structure: context.model.getStruct(context.model.data),
                        filterStruct: context.model.getFilterStruct(context.model.data, type)
                    });
                }
                context.removeEventListeners(el);
                context.setEventListeners(el);
            })
        }.bind(this));

    }

    removeEventListeners(el) {
        var context = this;
        for (var key in this.listeners) {
            el.removeEventListener('click', this.listeners[key])
        }
        EventBusLocal.unsubscribe('filter-tasks');
        console.log(EventBusLocal)
    }
}


