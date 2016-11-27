export default class Controller {
    constructor(view, el) {
        this.view = view;
        this.el = el;
    }

    init() {
        var context = this;

        var listeners = { // обьект проектирования поведения
            'modal-close': function (e) {
                context.view.modalClose(e, context.el);
            },
            'modal-confirm-add': function (e) {
                e.preventDefault();
                context.view.dropData(function () {
                    //EventBusLocalTasks.publish('task-added')
                    document.body.removeChild(context.el);
                });
            }

        };
        this.el.addEventListener('click', function (e) {
            if (listeners[e.target.id]) listeners[e.target.id](e)
        });
        
        
        document.getElementsByClassName('estimation-range')[0].addEventListener('click', function (e) {
            this.view.estimationRangeReview(e)
        }.bind(context));
        console.log(this.el)
    }
}