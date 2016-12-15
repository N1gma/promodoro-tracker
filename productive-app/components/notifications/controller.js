export default class Controller{
    constructor(el){
        this.el=el;
    }
    init(){
        setTimeout(()=>{
            if(this.el && this.el.parentNode) this.el.parentNode.removeChild(this.el);
        },5000);
        this.el.addEventListener('click', (e) => {
            if(e.target.classList.contains('notify-dismiss')){
                this.el.parentNode.removeChild(this.el);
            }
        })
    }
}