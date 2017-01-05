class TimerModel  {
    //static results = [];
    constructor(elem){
        this.elem = elem;
        this.key = elem.key;
        this.estimation = parseInt(app.User.dataSnapShot[this.key].estimation.slice(-1), 10);
        this.title = app.User.dataSnapShot[this.key].title;
        this.category = app.User.dataSnapShot[this.key].category;
    }
    getNewModel(type){
        var types = {
            'work':  new WorkModel(this.elem),
            'break-over': new BreakOverModel(this.elem),
            'task-over': new TaskEndModel(this.elem),
            'break' : new BreakModel(this.elem)
        };
       return types[type];
    }
    saveCycle(cycle) {
        var cycleObj = app.Renderer.helpers.arrayToObject(cycle);
        app.User.saveData(app.User.currentLogin, '/tasks/'+ this.key+'/cycle', cycleObj);
    }
}

export class StartModel extends TimerModel{
    constructor(elem) {
        super(elem);
        this.type = 'start';
        this.buttonsList = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Start',
                listener: function () {
                    app.EventBusLocalTimer.publish('timer-progress','work');
                }
            }
        ];
    }
}

class WorkModel extends TimerModel{
    constructor(elem){
        super(elem);
        this.type = 'work';
        this.time = app.User.settings['WORK TIME'];
        this.status = 'resolved';
        this.buttonsList = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-red'],
                innerHtml: 'Fail Pomodora',
                listener: function () {
                    this.status = 'failed';
                    app.EventBusLocalTimer.publish('timer-terminate',1);
                }.bind(this)
            },
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Finish Pomodora',
                listener: function () {
                    app.EventBusLocalTimer.publish('timer-terminate',1);
                }
            }
        ];
    }
}

class BreakModel extends TimerModel{
    constructor(elem){
        super(elem);
        this.type = 'break';
        this.time = app.User.settings['SHORT BREAK'];
        this.buttonsHolder = 'button-holder-centered';
        this.buttonsList = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Start Pomodora',
                listener: function () {
                    app.EventBusLocalTimer.publish('timer-terminate',2);
                }
            }
        ];
    }
}

class BreakOverModel extends TimerModel{
    constructor(elem){
        super(elem);
        this.type = 'break-over';
        this.buttonsList = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Start Pomodora',
                listener: function () {
                    app.EventBusLocalTimer.publish('state-progress');
                    app.EventBusLocalTimer.publish('timer-progress','work');
                }

            },
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-blue'],
                innerHtml: 'Finish Task',
                listener: function () {
                    app.EventBusLocalTimer.publish('timer-progress','task-over');
                }
            }
        ];
    }
}

class TaskEndModel extends TimerModel{
    constructor(elem){
        super(elem);
        this.type = 'task-over';
    }
}


