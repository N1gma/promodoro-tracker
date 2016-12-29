export default class Controller {
    constructor(el,view) {
        this.el = el;
        this.view = view;
    }

    init(target) {
        var context = this;
        
        var listeners = {
            'modal-close': function (e) {
                context.view.modalClose(e, context.el);
            },
            'modal-confirm-edit' : function (e) {
                context.view.modalConfirmEdit(e,context.el,target);
            },
            'modal-remove':function (e) {
                context.view.modalRemove(e,context.el,target);
            }
        };
        this.el.addEventListener('click', function (e) {
            if(listeners[e.target.id]) {
                listeners[e.target.id](e);
            }
        });

        document.getElementsByClassName('estimation-range')[0].addEventListener('click', function (e) {
            this.view.estimationRangeReview(e);
        }.bind(context));
        console.log(this.el);
    }
}