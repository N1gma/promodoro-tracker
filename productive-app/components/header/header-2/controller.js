export var Controller = {
    /**
     * @memberOf app.Renderer.HeaderDetailed
     * @instance
     * @param el
     */
    initCntrl: function (el) {
        var listeners = { // обьект проектирования поведения
            'log_out': function (e) {
                firebase.auth().signOut();
            },
            'settings': function (e) {
                app.router.moveTo('pomodoras');
            },
            'reports': function () {
                app.router.moveTo('reports');

            },
            'addTask':function () {
                app.Renderer.showModalAdd();

            },
            'trashOn':function (e) {
                if(e.target.classList.contains('active')){
                    app.EventBusLocal.publish('trash-off', e.target);
                }else{
                    app.EventBusLocal.publish('trash-on', e.target);
                }
            }
        };
        $('#addTask').tips('Add new task');
        $('#trashOn').tips('Activate delete mode');
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