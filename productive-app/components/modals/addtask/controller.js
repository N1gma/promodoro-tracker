/**
 * @class
 * @memberOf @memberOf app.Renderer.ModalAddTask
 */
class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        var el = this.model.$el[0];
        var context = this;
        var listeners = {
            'modal-close': function (e) {
                context.view.modalClose(e, el);
            },
            'modal-confirm-add': function (e) {
                e.preventDefault();
                let validator = new context.model.Validator();
                let validateResults = validator.validate(context.model.getModalConfirmData());
                if (context.model.checkResults(validateResults)) {
                    context.view.dropData(function () {
                        document.getElementById('app-body').removeChild(el);
                    });
                } else {
                    for (let i = 0; i < validateResults.length; i++) {
                        if(validateResults[i].length>0){
                            app.EventBus.publish('notify', {
                                msg: validateResults[i],
                                type: 'fail',
                                singleton: true
                            });
                        }
                    }
                }
            }
        };
        el.addEventListener('click', function (e) {
            if (listeners[e.target.id]) {
                listeners[e.target.id](e);
            }
        });

        document.getElementsByClassName('estimation-range')[0].addEventListener('click', function (e) {
            this.view.constructor.estimationRangeReview(e);
        }.bind(context));

        this.model.validateInit();
    }

}


export default Controller;