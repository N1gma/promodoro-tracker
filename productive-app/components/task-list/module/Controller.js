
export default class Controller{
    constructor(view,model){
        this.view = view;
        this.model = model
    }
    initController(callback){
        this.model.patchList(callback);
        //this.view.showList
    }
    setEventListeners(){
        document.getElementsByClassName('today-list')[0].addEventListener('click', function (e) {
            if(e.target.classList.contains('edit-task')){
                Router.showModalEdit(e.target);
            }
        });
    }
}
