export var view = {
    animateTimer(timer, cycle) {
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationDuration = cycle.cycleTime * 60 + 's';
            timer.timerControlElements[i].style.animationPlayState = 'running';
        }
        timer.timeout = setInterval(function () {
            timer.count++;
            console.log(timer.count);
        }, 1000);
    },
    pauseAnimation(timer) {
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationPlayState = 'paused';
        }
        clearInterval(timer.timeout);
        console.log('paused');
    },
    resumeAnimation (timer) {
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationPlayState = 'running';
        }
        timer.timeout = setInterval(function () {
            timer.count++;
            console.log(timer.count);
        }, 1000);
        console.log('resumed');
    }
};