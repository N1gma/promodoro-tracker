
export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
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

    init() {
        var EventBusLocal = app.EventBusLocal;
        var context = this;
        console.log(this);
        EventBusLocal.subscribe('first-start', function(){
            context.view.startCycle();
        });
        EventBusLocal.subscribe('timer-progress', function(type){
            context.model = context.model.getNewModel(type);
            context.view.model = context.model;
            context.view.newCycle();
        });
        this.generateCycle();
       /* EventBusLocal.subscribe('time-stopped', function(){
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
        });
        this.view.startCycle();*/
    }
    generateCycle(){
        var cycle = this.view.cycle;
        for(var i = 0;i<this.model.estimation;i++){
            cycle.push('work');
            cycle.push('break');
        }
        cycle.splice(-1,1);
        app.EventBusLocal.publish('first-start');
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