/**
 * @class
 * @memberOf Notifications
 */
class Controller{
    constructor(model){
        this.model = model;
    }
    init(){
        var el = this.model.el;
        setTimeout(()=>{
            if(el && el.parentNode){
                if(this.model.clearSelf){
                    this.model.clearSelf();
                }
                el.parentNode.removeChild(el);
            }
        },10000);
        el.addEventListener('click', (e) => {
            if(e.target.classList.contains('notify-dismiss')){
                if(this.model.clearSelf){
                    this.model.clearSelf();
                }
                el.parentNode.removeChild(el);
            }
        });
    }
}

export default Controller;