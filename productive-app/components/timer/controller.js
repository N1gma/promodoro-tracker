export default class Controller {
    constructor(source, view) {
        this.view = view;
        this.sourceKey = source;
        this.cycle = {};
        this.listeners= {
            'pause':function (type,target) {
                controllerFilter.activateTab(target);
                app.EventBusLocal.publish('filter-tasks', type);
            },
            'resume':function (type,target) {
                controllerFilter.activateTab(target);
                app.EventBusLocal.publish('filter-tasks', type);
            }
        };
    }


    init(template, el) {
        var User = window.app.User;
        var EventBusLocal = window.app.EventBusLocal;

        var context = this;
        this.timer = {
            container: document.getElementsByClassName('graph-container')[0],
            timerControlElements: document.getElementsByClassName('set-able'),
            timeout: {},
            count:0
        };
        EventBusLocal.subscribe('time-stopped', function(){
            context.view.pauseAnimation(context.timer);
        });
        EventBusLocal.subscribe('time-resumed', function(){
            context.view.resumeAnimation(context.timer);
        });
        this.cycle = {
            estimation: parseInt(User.dataSnapShot[this.sourceKey].estimation.slice(-1),10),
            category: User.dataSnapShot[this.sourceKey].category,
            cycleTime: User.settings['WORK TIME'],
            break: false,
            title:User.dataSnapShot[this.sourceKey].title
        };
        console.log(this.cycle);
        el.innerHTML = template({
            data:this.cycle
        });
        document.getElementById('app-body').appendChild(el);
        this.view.animateTimer(this.timer, this.cycle);
        //this.view.resumeAnimation(this.timer);
    }

}