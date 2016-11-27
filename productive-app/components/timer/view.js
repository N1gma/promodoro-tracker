export var view = {
    animateTimer(timer, category, time) {
        /*if (timer.container.classList.length > 1) {
            timer.container.classList.remove(timer.classList[1]);
            timer.container.classList.add(category);
        } else {
            timer.container.classList.add(category);
        }*/
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationDuration = time*60 + 's';
        }
    },
    pauseAnimation(timer) {
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationPlayState = 'paused';
        }
    },
    resumeAnimation (timer) {
        for (var i = 0; i < timer.timerControlElements.length; i++) {
            timer.timerControlElements[i].style.animationPlayState = 'running';
        }
    }
};