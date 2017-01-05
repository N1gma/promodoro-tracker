export default class View {
    constructor(model,template,css) {
        this.model = model;
        this.template = template;
        this.css = css;
        this.buttonsHolder = '';
        this.cycleStep = 0;
        this.step = 1;
        this.timer = {
            container: document.getElementsByClassName('graph-container')[0],
            timerControlElements: document.getElementsByClassName('set-able'),
            timeout: {},
            count: 0
        };
    }

    startCycle() {
        this.model.cycle = this.cycle;
        this.createTimer();
        document.getElementById('app-body').appendChild(this.model.elem);
        this.buttonsHolder = 'button-holder-centered';
        app.Renderer.renderButtons(this.model.buttonsList, this.buttonsHolder);
    }

    newCycle() {
        var timer = this.timer;
        timer.count = 0;
        var context = this;
        this.model.cycle = this.cycle;
        this.createTimer();
        this.resetButtonInterface(this.buttonsHolder);
        if(this.model.time){
            let time = this.model.time;
            for (var i = 0; i < timer.timerControlElements.length; i++) {
                timer.timerControlElements[i].style.animationDuration = time/**60*/ +'s';
                timer.timerControlElements[i].style.animationPlayState = 'running';
            }
            timer.timeout = setInterval(context.timesOut.bind(context), 1000);
        }
    }
    stateProgress(){
        this.resolvePomodora(this.model.status);
        if(this.cycleCheck()){
            this.cycleStep++;
        }else{
            app.EventBusLocalTimer.publish('timer-progress','task-over');
        }
    }

    timesOut(){
        var timer = this.timer;
        var max = this.model.time;
        var context = this;
        if (timer.count > max || timer.count === max) {
            clearInterval(timer.timeout);
            this.resolvePomodora(this.model.status);
            this.cycleStep = this.cycleStep + this.step;
            if(this.cycleCheck()){
                this.step = 1;
                app.EventBusLocalTimer.publish('timer-progress',context.cycle[context.cycleStep]);
                return true;
            }else{
                app.EventBusLocalTimer.publish('timer-progress','task-over');
            }
        } else {
            timer.count++;
            console.log(timer.count);
        }
    }

    cycleCheck(){
        return this.cycleStep <= this.cycle.length-1;
    }

    resetButtonInterface(container){
        this.buttonsHolder = this.model.buttonsHolder || 'button-holder';
        app.Renderer.clearContent(document.getElementsByClassName(container)[0], true);
        if(this.model.buttonsList){
            app.Renderer.renderButtons(this.model.buttonsList, this.buttonsHolder);
        }
    }

    resolvePomodora(status) {
        if (status) {
            this.cycle[this.cycleStep] = status;
            this.model.saveCycle(this.cycle);
            console.log(app.User.dataSnapShot[this.model.key]);
        }
    }

    createTimer(){
        this.model.elem.innerHTML = this.template({
            data: this.model
        });
        this.model.elem.appendChild(this.css);
    }
}