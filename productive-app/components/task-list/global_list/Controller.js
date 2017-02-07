export default class Controller {
    constructor(model, view, template) {
        this.template = template;
        this.model = model;
        this.view = view;
        this.listeners = {
            editTask: function (e) {
                if (e.target.classList.contains('edit-task')) {
                    app.Renderer.showModalEdit(e.target);
                }
            },
            trashDrop: function (e) {
                app.EventBusLocal.publish('trash-drop', {
                    e: e,
                    context: this
                });
            }.bind(this),
            showGlobalList: this.view.showGlobalList,
            moveToDaily: this.view.moveToDaily
        };
    }

    initController(callback) {
        this.model.patchList(callback);
        /*var self = this;
        if(this.model.data){
            el.innerHTML = self.template({
                data: self.model.data,
                structure: self.model.getStruct(self.model.data)
            });
        }
        this.removeEventListeners(el);
        this.setEventListeners(el);*/
        //return this;
    }

    setEventListeners(el) {
        var context = this;
        el.addEventListener('click', this.listeners.editTask);
        el.addEventListener('click', this.listeners.trashDrop);
        el.addEventListener('click', this.listeners.moveToDaily);
        el.addEventListener('click', this.listeners.showGlobalList);
        app.EventBusLocal.subscribe('filter-tasks', function (type) {
            console.log('filter ' + type);
            console.log(this);
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
            });
        }.bind(this));
    }

    removeEventListeners(el) {
        var context = this;
        for (var key in this.listeners) {
            el.removeEventListener('click', this.listeners[key]);
        }
        app.EventBusLocal.unsubscribe('filter-tasks');
    }
}


