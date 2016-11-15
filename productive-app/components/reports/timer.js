window.onload = function () {
    var Timer = {
        timer: document.getElementsByClassName('graph-container')[0],
        timerControlElements: document.getElementsByClassName('set-able'),
        animateTimer: function (category, time) {
            if (this.timer.classList.length > 1) {
                this.timer.classList.remove(this.timer.classList[1]);
                this.timer.classList.add(category);
            } else {
                this.timer.classList.add(category);
            }
            for (var i = 0; i < this.timerControlElements.length; i++) {
                this.timerControlElements[i].style.animationDuration = time + 's';
            }
        },
        pauseAnimation: function () {
            for (var i = 0; i < this.timerControlElements.length; i++) {
                this.timerControlElements[i].style.animationPlayState = 'paused';
            }
        },
        resumeAnimation: function () {
            for (var i = 0; i < this.timerControlElements.length; i++) {
                this.timerControlElements[i].style.animationPlayState = 'running';
            }
        }
    };


    Timer.animateTimer('work', 20);
    Timer.resumeAnimation();
    document.getElementById('start-timer').addEventListener('click', function (e) {
        Timer.pauseAnimation();
    })
};



