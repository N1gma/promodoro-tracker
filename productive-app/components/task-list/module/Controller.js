
export default class Controller{
    constructor(view,model){
        this.view = view;
        this.model = model
    }
    initController(callback){
        this.model.patchList(callback);
    }
}
