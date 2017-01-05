class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.results = [];
    }

    init(cycle) {
        var EventBusLocalTimer = app.EventBusLocalTimer;
        var context = this;
        this.view.cycle = this.generateCycle(cycle);
        EventBusLocalTimer.timer = this.view.timer;
        EventBusLocalTimer.subscribe('timer-progress', function(type){
            context.model = context.model.getNewModel(type);
            context.view.model = context.model;
            context.view.newCycle();
        });
        EventBusLocalTimer.subscribe('state-progress', function(){
            context.view.stateProgress();
        });
        EventBusLocalTimer.subscribe('timer-terminate', function(step){
            context.view.timer.count = context.model.time;
            context.view.step = step;
            context.view.timesOut();
        });
        EventBusLocalTimer.subscribe('finish-task', function(type){
            app.router.moveTo('task-list');
        });
        this.model.elem.addEventListener('click', function(e){
            if(e.target.id ==='addPomodoro'){
                var cycle = context.view.cycle;
                cycle.push('break');
                cycle.push('break-over');
                cycle.push('work');
                var el = document.createElement('li');
                el.classList.add('phase');
                document.getElementsByClassName('phases')[0]
                    .insertBefore(el, e.target);
            }
        });
        context.view.startCycle();
    }

    generateCycle(cycle){
        //var context = this;
        if(cycle){
            var newCycle = app.Renderer.helpers.objectToArray(cycle);
            this.view.cycleStep = newCycle.indexOf('work');
            return newCycle;
        }else{
            cycle = [];
            for(var i = 0;i<this.model.estimation;i++){
                cycle.push('work');
                cycle.push('break');
                cycle.push('break-over');
            }
            cycle.splice(-2,2);
            return cycle;
        }
    }
}

export default Controller;
