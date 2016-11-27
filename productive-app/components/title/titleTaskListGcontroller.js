export var controller = {
    listeners: {
        'delete-all': function () {
            var trash = document.getElementById('trashOn')
            for (var i = 0; i < User.trashData.length; i++) {
                User.deleteTaskData(User.currentLogin, '/tasks/' + User.trashData[i]);
            }
            EventBusLocal.publish('trash-off', trash);
            EventBusLocal.publish('trash-refresh', trash);
        },
        'select-all':function (dependency) {
            EventBusLocal.publish('trash-check-all',dependency)
        },
        'deselect-all':function (dependency) {
            EventBusLocal.publish('trash-uncheck-all','today-list',dependency)
        }

    },
    init:function (el,dependency) {
        el.addEventListener('click', function (e) {
            if(controller.listeners[e.target.id]) controller.listeners[e.target.id](dependency)
        })
    }
            
};