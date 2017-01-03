export default class View {
    constructor(model) {
        this.model = model;
        this.buttonsHolder = '';
        this.cycle = [];
        this.cycleStep = 0;
    }

    startCycle() {
        this.model.elem.innerHTML = this.model.template({
            data: this.model
        });
        document.getElementById('app-body').appendChild(this.model.elem);
        this.buttonsHolder = 'button-holder-centered';
        app.Renderer.renderButtons(this.model.buttonsList, this.buttonsHolder);
        /*let timer = this.model.timer;
         let time = this.model.work;
         for (var i = 0; i < timer.timerControlElements.length; i++) {
         timer.timerControlElements[i].style.animationDuration = time/** 60*/
        +'s';
        /*timer.timerControlElements[i].style.animationPlayState = 'running';
         }
         this.model.interval();*/
    }

    newCycle() {
        let timer = this.model.timer;
        let time = this.model.time;
        this.model.elem.innerHTML = this.model.template({
            data: this.model
        });
        this.resetButtonInterface(this.buttonsHolder);
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationDuration = time/**60*/ +'s';
            timer.timerControlElements[i].style.animationPlayState = 'running';
        }
        this.countdownStart();
    }

    countdownStart() {
        var context = this;
        var timer = this.model.timer;
        var max = this.model.time;
        timer.timeout = setInterval(function () {
            if (timer.count > max || timer.count === max) {
                clearInterval(timer.timeout);
                //app.router.moveTo('tasklist');
                //this.elem.classList.add('done');
                context.cycleStep++;
                app.EventBusLocal.publish('timer-progress',context.cycle[context.cycleStep]);
                return true;
            } else {
                timer.count++;
                console.log(timer.count);
            }
        }, 1000);
    }

    resetButtonInterface(container){
        //this.buttonsHolder = container;
        app.Renderer.clearContent(document.getElementsByClassName(container)[0], true);
        app.Renderer.renderButtons(this.model.buttonsList);
        this.buttonsHolder = 'button-holder';
    }

    /*pauseAnimation() {
     let timer = this.model.timer;
     for (var i = 0; i < timer.timerControlElements.length; i++) {
     timer.timerControlElements[i].style.animationPlayState = 'paused';
     }
     clearInterval(timer.timeout);

     console.log('paused');
     }
     resumeAnimation () {
     let timer = this.model.timer;
     for (var i = 0; i < timer.timerControlElements.length; i++) {
     timer.timerControlElements[i].style.animationPlayState = 'running';
     }
     this.model.interval();
     console.log('resumed');
     }*/
}