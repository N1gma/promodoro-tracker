
export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.results = [];
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
        EventBusLocal.subscribe('state-progress', function(){
            context.view.stateProgress();
        });
        EventBusLocal.subscribe('timer-terminate', function(step){
            context.model.timer.count = context.model.time;
            context.view.step = step;
            context.view.timesOut();
        });
        EventBusLocal.subscribe('finish-task', function(type){
            app.router.moveTo('task-list');
        });
        this.generateCycle();
    }

    generateCycle(){
        var cycle = this.view.cycle;
        for(var i = 0;i<this.model.estimation;i++){
            cycle.push('work');
            cycle.push('break');
            cycle.push('break-over');
        }
        cycle.splice(-1,2);
        app.EventBusLocal.publish('first-start');
    }
}
