class TimerModel  {
    //static results = [];
    constructor(elem,template){
        this.elem = elem;
        this.template = template;
        this.elem.key = elem.getAttribute('key');
        this.timer = {
            container: document.getElementsByClassName('graph-container')[0],
            timerControlElements: document.getElementsByClassName('set-able'),
            timeout: {},
            count: 0
        };
        this.estimation = parseInt(app.User.dataSnapShot[this.elem.key].estimation.slice(-1), 10);
        this.title = app.User.dataSnapShot[this.elem.key].title;
        this.category = app.User.dataSnapShot[this.elem.key].category;
    }
    getNewModel(type){
        var types = {
            'work':  new WorkModel(this.elem, this.template),
            'break-over': new BreakOverModel(this.elem, this.template),
            'task-over': new TaskEndModel(this.elem, this.template),
            'break' : new BreakModel(this.elem, this.template)
        };
       return types[type];
    }
}

export class StartModel extends TimerModel{
    constructor(elem,template) {
        super(elem,template);
        this.type = 'start';
        this.buttonsList = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Start',
                listener: function () {
                    app.EventBusLocal.publish('timer-progress','work');
                }
            }
        ];
    }
}

class WorkModel extends TimerModel{
    constructor(elem,template){
        super(elem,template);
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
                    console.log(this);
                    app.EventBusLocal.publish('timer-terminate',1);
                }.bind(this)
            },
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Finish Pomodora',
                listener: function () {
                    app.EventBusLocal.publish('timer-terminate',1);
                }
            }
        ];
    }
}

class BreakModel extends TimerModel{
    constructor(elem,template){
        super(elem,template);
        this.type = 'break';
        this.time = app.User.settings['SHORT BREAK'];
        this.buttonsHolder = 'button-holder-centered';
        this.buttonsList = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Start Pomodora',
                listener: function () {
                    app.EventBusLocal.publish('timer-terminate',2);
                }
            }
        ];
    }
}

class BreakOverModel extends TimerModel{
    constructor(elem,template){
        super(elem,template);
        this.type = 'break-over';
        this.buttonsList = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Start Pomodora',
                listener: function () {
                    app.EventBusLocal.publish('state-progress');
                    app.EventBusLocal.publish('timer-progress','work');
                }

            },
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-blue'],
                innerHtml: 'Finish Task',
                listener: function () {
                    app.EventBusLocal.publish('timer-progress','task-over');
                }
            }
        ];
    }
}

class TaskEndModel extends TimerModel{
    constructor(elem,template){
        super(elem,template);
        this.type = 'task-over';
    }
}


