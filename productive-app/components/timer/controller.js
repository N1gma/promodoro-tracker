export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.cycle = {};
        this.listeners = {
            'pause':function (type,target) {
                controllerFilter.activateTab(target);
                app.EventBusLocal.publish('time-stopped', type);
            },
            'resume':function (type,target) {
                controllerFilter.activateTab(target);
                app.EventBusLocal.publish('time-resumed', type);
            }
        };
    }

    init(template, el) {
        var EventBusLocal = app.EventBusLocal;
        var context = this;
        for(var i = 0;i<this.model.estimation;i++){
            this.model.cycle.push('task');
            this.model.cycle.push('break');
        }
        EventBusLocal.subscribe('time-stopped', function(){
            context.view.pauseAnimation(context.model.timer);
        });
        EventBusLocal.subscribe('time-resumed', function(){
            context.view.resumeAnimation(context.model.timer);
        });
        EventBusLocal.subscribe('reanimate-timer', function(){
            context.model.timer = {
                container: document.getElementsByClassName('graph-container')[0],
                timerControlElements: document.getElementsByClassName('set-able'),
                timeout: {},
                count: 0,
                finished: false
            };
            this.view.animateTimer();
        });
        el.innerHTML = template({
            data: this.model
        });
        document.getElementById('app-body').appendChild(el);
        this.view.animateTimer('work');
    }
}

/*var promiseTimeout = new Promise((resolve, reject) => {
       setTimeout(resolve, time);
    });*/


/*promiseTimeout(500)
    .then(() => {
        console.log('Timeout expired!');
        // do something
        return promiseTimeout(1000);
    })
    .then(() => {
        // do another stuff

    });*/