var controller2 = {
    listeners: {
        'pause':function (type,target) {
            controllerFilter.activateTab(target)
            EventBusLocal.publish('filter-tasks', type)
        },
        'resume':function (type,target) {
            controllerFilter.activateTab(target)
            EventBusLocal.publish('filter-tasks', type)
        }
    },
    init:function (el) {
        var context = this;
        el.addEventListener('click', function (e) {
            if(context.listeners[identifier]){
                context.listeners[identifier](identifier,e.target);
            }
        })
    }
}
