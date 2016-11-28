export default class Controller{
    constructor(source,view){
        this.view = view;
        this.sourceKey = source;
        this.cycle = {

        }
    }
    init(template,el){
        this.timer ={
            container: document.getElementsByClassName('graph-container')[0],
            timerControlElements: document.getElementsByClassName('set-able')
        };
        /*console.log(this.sourceKey);
        console.log(this.timer.timerControlElements);*/
        this.cycle.estimation = User.dataSnapShot[this.sourceKey].estimation.slice(-1);
        this.cycle.category = User.dataSnapShot[this.sourceKey].category;
        this.cycle.workTime = User.settings['WORK TIME'];
        console.log(this.cycle);
        el.innerHTML = template({
            category:User.dataSnapShot[this.sourceKey].category,
            title: User.dataSnapShot[this.sourceKey].title,
            workTime: User.settings['WORK TIME'],
            breakTime: User.settings['BREAK TIME'],
            estimation:User.dataSnapShot[this.sourceKey].estimation.slice(-1)
        });
        document.body.appendChild(el);

        this.view.animateTimer(this.timer, this.cycle, this.cycle.workTime);
        this.view.resumeAnimation(this.timer);
    };
   
}