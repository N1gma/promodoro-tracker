export var view = {
    timeout:{},
    animateTimer(timer, category, time) {
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationDuration = time*60 + 's';
            var timeout = setTimeout(function(){

            },time*60+'s')
        }
    },
    pauseAnimation(timer) {
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationPlayState = 'paused';
            console.log(this.timeout);
            clearTimeout(timeout);
            console.log(this.timeout);
        }
    },
    resumeAnimation (timer) {
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationPlayState = 'running';
        }
    }
};