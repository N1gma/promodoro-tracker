export var Controller = {
    initCntrl: function (el) {
        var listeners = { // обьект проектирования поведения
            'log_out': function (e) {
                firebase.auth().signOut();
            },
            'settings': function (e) {
                //EventBus.publish('settings')
                router.moveTo('pomodoras')
            },
            'reports': function () {
                //EventBus.publish('reports');
                router.moveTo('reports')
            }

        }
        el.addEventListener('click',function (e) {
            if (listeners[e.target.id]) listeners[e.target.id](e)
        })
    }
};