export default class Model  {
    constructor(elem){
        this.elem = elem;
        this.elem.key = elem.getAttribute('key');
        this.timer = {
            container: document.getElementsByClassName('graph-container')[0],
            timerControlElements: document.getElementsByClassName('set-able'),
            timeout: {},
            count: 0,
            finished: false
        };
        /*this.workTimer = {
            time: app.User.settings['WORK TIME'],
            category: app.User.dataSnapShot[sourceKey].category
        };
        this.breakTimer = {
            time: app.User.settings['BREAK TIME'],
            category: app.User.dataSnapShot[sourceKey].category
        };*/
        this.cycle = [];
        this.break = app.User.settings['BREAK TIME'];
        this.work = app.User.settings['WORK TIME'];
        this.estimation = parseInt(app.User.dataSnapShot[this.elem.key].estimation.slice(-1), 10);
        this.title = app.User.dataSnapShot[this.elem.key].title;
        this.category = app.User.dataSnapShot[this.elem.key].category;
    }

    timerCheck (timer, max){
        if(timer.count > max || timer.count === max){
            clearInterval(timer.timeout);
            app.router.moveTo('tasklist');
            //this.elem.classList.add('done');
            //app.EventBusLocal.publish('reanimate-timer');
            return true;
        }
    }
    interval(){
        var context = this;
        this.timer.timeout = setInterval(function () {
            if(context.timerCheck(context.timer,context.work)){
                return true;
            }else{
                context.timer.count++;
                console.log(context.timer.count);
            }
        }, 1000);
    }
}


