export default class Controller {
    constructor(model,eBusLocal) {
        //this.view = view;
        this.model = model;
        this.eBusLocal = eBusLocal;
        this.listeners = {
            editTask:function (e) {
                if (e.target.classList.contains('edit-task')) {
                    Router.showModalEdit(e.target);
                }
            },
            trashDrop:function (e) {
                this.eBusLocal.publish('trash-drop',{
                    e:e,
                    context:this
                })
            }.bind(this),
            showGlobalList:function(e){
                if (e.target.classList.contains('drop-switch')) {
                    e.target.innerHTML = '<span>Global list</span>&#xe907';
                    document.getElementsByClassName('global-list')[0].classList.toggle('list-hidden')
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
    }

    removeEventListeners(el){
        var context = this;
        for(var key in this.listeners){
            el.removeEventListener('click', this.listeners[key])
        }
    }
}


