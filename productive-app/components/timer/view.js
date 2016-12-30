export default class View  {
    constructor(model){
        this.model = model;
    }
    animateTimer(type) {
        let timer = this.model.timer;
        let time = this.model.work;
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationDuration = time/** 60*/ + 's';
            timer.timerControlElements[i].style.animationPlayState = 'running';
        }
        this.model.interval();
    }
    pauseAnimation() {
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
    }
}