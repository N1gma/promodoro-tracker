export default class Controller {
    constructor(model,eBusLocal) {
        //this.view = view;
        this.model = model;
        this.eBusLocal = eBusLocal;
    }

    initController(callback) {
        this.model.patchList(callback);
        //this.view.showList
    }

    setEventListeners() {
        var context = this;
        document.getElementsByClassName('today-list')[0].addEventListener('click', function (e) {
            if (e.target.classList.contains('edit-task')) {
                Router.showModalEdit(e.target);
            }
        });
        document.getElementsByClassName('today-list')[0].addEventListener('click', function (e) {
            context.eBusLocal.publish('trash-drop',{
                e:e,
                context:context
            })
        });
    }
}
