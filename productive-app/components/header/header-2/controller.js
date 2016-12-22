export var Controller = {
    initCntrl: function (el) {
        var listeners = { // обьект проектирования поведения
            'log_out': function (e) {
                firebase.auth().signOut();
            },
            'settings': function (e) {
                router.moveTo('pomodoras')
            },
            'reports': function () {
                router.moveTo('reports')

            },
            'addTask':function () {
                Renderer.showModalAdd()

            },
            'trashOn':function (e) {
                if(e.target.classList.contains('active')){
                    EventBusLocal.publish('trash-off', e.target)
                }else{
                    EventBusLocal.publish('trash-on', e.target)
                }
            }
        };
        $('#addTask').tips('Add new task');
        $('#trashOn').tips('Activate delete mode');
        $('#reports').tips('Go to Reports');
        $('#settings').tips('Go to Settings');
        $('#log_out').tips('Sign out',true);
        el.addEventListener('click',function (e) {
            if (listeners[e.target.id]) listeners[e.target.id](e)
        })
    }
};