import View from  './view';
import {StartModel} from './model';
import template from './template.jade';
import css from '!!css-loader!less-loader!./style.less';

class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.results = [];
    }

    static preinit(target) {
        var timer = document.createElement('div');
        timer.key = target.getAttribute('key');
        var cycle = app.User.dataSnapShot[timer.key].cycle || undefined;
        var model = new StartModel(timer);
        var view = new View(model, template, app.Renderer.helpers.getCss(css));
        var controller = new Controller(view, model);
        controller.init(cycle);
    }

    init(cycle) {
        var EventBusLocalTimer = app.EventBusLocalTimer;
        var context = this;
        EventBusLocalTimer.timer = this.view.timer;
        EventBusLocalTimer
            .subscribe('timer-progress', function (type) {
                context.model = context.model.getNewModel(type);
                context.view.model = context.model;
                context.view.newCycle();
            })
            .subscribe('state-progress', function () {
                context.view.stateProgress();
            })
            .subscribe('timer-terminate', function (step) {
                context.view.timer.count = context.model.time;
                context.view.step = step;
                context.view.timesOut();
            })
            .subscribe('finish-task', function (type) {
                app.router.moveTo('task-list');
            })
            .subscribe('task-done', function () {

            });
        this.model.elem.addEventListener('click', (e) => {
            if (e.target.id === 'addPomodoro') {
                this.view.expandCycle(e);
            }
        });
        this.view.cycle = this.generateCycle(cycle);
        this.view.startCycle();
    }

    generateCycle(cycle) {
        if (cycle) {
            var newCycle = app.Renderer.helpers.objectToArray(cycle);
            this.view.cycleStep = newCycle.indexOf('work');
            return newCycle;
        }
        else {
            cycle = [];
            for (var i = 0; i < this.model.estimation; i++) {
                cycle.push('work');
                cycle.push('break');
                cycle.push('break-over');
            }
            cycle.splice(-2, 2);
            return cycle;
        }
    }
}

export default Controller;
