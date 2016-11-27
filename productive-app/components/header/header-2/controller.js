export var Controller = {
    initCntrl: function (el) {
        var listeners = { // обьект проектирования поведения
            'log_out': function (e) {
                firebase.auth().signOut();
            },
            'settings': function (e) {
                EventBus.publish('settings')
            },
            'reports': function () {
                EventBus.publish('reports')

            },
            'addTask':function () {
                Router.showModalAdd()

            },
            'trashOn':function (e) {
                if(e.target.classList.contains('active')){
                    EventBusLocal.publish('trash-off', e.target)
                }else{
                    EventBusLocal.publish('trash-on', e.target)
                }
            }
        };
        
        el.addEventListener('click',function (e) {
            if (listeners[e.target.id]) listeners[e.target.id](e)
        })
    }
};