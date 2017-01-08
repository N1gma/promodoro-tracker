/**
 * @class
 * @memberOf @memberOf app.Renderer.ModalEditTask
 */
class Controller {
    constructor(el,view,model) {
        this.el = el;
        this.view = view;
        this.model = model;
    }

    init(target) {
        var context = this;
        var listeners = {
            'modal-close': function (e) {
                context.view.modalClose(e, context.el);
            },
            'modal-remove':function (e) {
                context.view.modalRemove(e,context.el,target);
            },
            'modal-confirm-edit' : function (e) {
                e.preventDefault();
                let validator = new context.model.Validator();
                let validateResults = validator.validate(context.model.getModalConfirmData());
                if (context.model.checkResults(validateResults)) {
                    context.view.modalConfirmEdit(e,context.el,target);
                } else {
                    for (let i = 0; i < validateResults.length; i++) {
                        if(validateResults[i].length>0){
                            app.EventBus.publish('notify', {
                                msg: validateResults[i],
                                type: 'fail'
                            });
                        }
                    }
                }
                //context.view.modalConfirmEdit(e,context.el,target);
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

        this.model.validateInit();
    }
}

export default Controller;