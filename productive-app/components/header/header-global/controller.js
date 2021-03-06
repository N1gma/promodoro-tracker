export var Controller = {
    /**
     * @memberOf  @memberOf app.Renderer.Header
     * @param {HTMLElement} el
     */
    initCntrl: function (el) {
        var listeners = { // обьект проектирования поведения
            'log_out': function (e) {
                firebase.auth().signOut();
            },
            'settings': function (e) {
                //EventBus.publish('settings')
                app.router.moveTo('pomodoras');
            },
            'reports': function () {
                //EventBus.publish('reports');
                app.router.moveTo('reports');
            }

        };
        $('#reports').tips('Go to Reports');
        $('#settings').tips('Go to Settings');
        $('#log_out').tips('Sign out',true);
        el.addEventListener('click',function (e) {
            if (listeners[e.target.id]){
                listeners[e.target.id](e);
            }
        });
    }
};

