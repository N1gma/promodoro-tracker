class timerModel  {
    /*constructor(elem){
        this.elem = elem;
        this.elem.key = elem.getAttribute('key');
        this.timer = {
            container: document.getElementsByClassName('graph-container')[0],
            timerControlElements: document.getElementsByClassName('set-able'),
            timeout: {},
            count: 0,
            finished: false
        };
        this.cycle = [];
        this.break = app.User.settings['BREAK TIME'];
        this.work = app.User.settings['WORK TIME'];
        this.estimation = parseInt(app.User.dataSnapShot[this.elem.key].estimation.slice(-1), 10);
        this.title = app.User.dataSnapShot[this.elem.key].title;
        this.category = app.User.dataSnapShot[this.elem.key].category;
    }*/
    constructor(elem,template){
        this.elem = elem;
        this.template = template;
        this.elem.key = elem.getAttribute('key');
        this.timer = {
            //animationDuration: ,
            container: document.getElementsByClassName('graph-container')[0],
            timerControlElements: document.getElementsByClassName('set-able'),
            timeout: {},
            count: 0
        };
        this.estimation = parseInt(app.User.dataSnapShot[this.elem.key].estimation.slice(-1), 10);
        this.title = app.User.dataSnapShot[this.elem.key].title;
        this.category = app.User.dataSnapShot[this.elem.key].category;
    }
    /*timerCheck (timer, max){
        if(timer.count > max || timer.count === max){
            clearInterval(timer.timeout);
            app.router.moveTo('tasklist');
            //this.elem.classList.add('done');
            //app.EventBusLocal.publish('reanimate-timer');
            return true;
        }
    }*/
    getNewModel(type){
        return type === 'work' ? new WorkModel(this.elem, this.template):
            new BreakModel(this.elem, this.template);
    }
}

export class StartModel extends timerModel{
    constructor(elem,template) {
        super(elem,template);
        this.text = 'Lets do it!';
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

export class WorkModel extends timerModel{
    constructor(elem,template){
        super(elem,template);
        this.time = app.User.settings['WORK TIME'];
        this.buttonsList = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-red'],
                innerHtml: 'Fail Pomodora',
                listener: function () {
                    app.EventBusLocal.publish('time-stopped');
                }

            }, {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Finish Pomodora',
                listener: function () {
                    app.EventBusLocal.publish('time-resumed');
                }
            }
        ];
    }
}

export class BreakModel extends timerModel{
    constructor(elem,template){
        super(elem,template);
        this.time = app.User.settings['SHORT BREAK'];
        this.buttonsList = [
            {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-green'],
                innerHtml: 'Start Pomodora',
                listener: function () {
                    app.EventBusLocal.publish('time-stopped');
                }

            }, {
                node: document.createElement('button'),
                class: ['button-row-2', 'button-blue'],
                innerHtml: 'Finish Task',
                listener: function () {
                    app.EventBusLocal.publish('time-resumed');
                }
            }
        ];
    }
}


