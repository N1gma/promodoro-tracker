var controller2 = {
    listeners: {
        'pause':function (type,target) {
            controllerFilter.activateTab(target);
            app.EventBusLocal.publish('time-stopped', type)
        },
        'resume':function (type,target) {
            controllerFilter.activateTab(target);
            app.EventBusLocal.publish('time-resumed', type)
        }
    },
    init:function (el) {
        var context = this;
        el.addEventListener('click', function (e) {
            if(context.listeners[identifier]){
                context.listeners[identifier](identifier,e.target);
            }
        });
    }
};
