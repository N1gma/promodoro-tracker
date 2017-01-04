export default class View {
    constructor(model) {
        this.model = model;
        this.buttonsHolder = '';
        this.cycle = [];
        this.cycleStep = 0;
        this.step = 1;
    }

    startCycle() {
        this.model.cycle = this.cycle;
        this.model.elem.innerHTML = this.model.template({
            data: this.model
        });
        document.getElementById('app-body').appendChild(this.model.elem);
        this.buttonsHolder = 'button-holder-centered';
        app.Renderer.renderButtons(this.model.buttonsList, this.buttonsHolder);
    }

    newCycle() {
        var timer = this.model.timer;
        var context = this;
        this.model.cycle = this.cycle;
        this.model.elem.innerHTML = this.model.template({
            data: this.model
        });
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
            app.EventBusLocal.publish('timer-progress','task-over');
        }
    }

    timesOut(){
        var timer = this.model.timer;
        var max = this.model.time;
        var context = this;
        if (timer.count > max || timer.count === max) {
            clearInterval(timer.timeout);
            this.resolvePomodora(this.model.status);
            this.cycleStep = this.cycleStep + this.step;
            if(this.cycleCheck()){
                this.step = 1;
                app.EventBusLocal.publish('timer-progress',context.cycle[context.cycleStep]);
                return true;
            }else{
                app.EventBusLocal.publish('timer-progress','task-over');
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
        }
    }
}