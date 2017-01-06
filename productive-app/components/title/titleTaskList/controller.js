export var controller = {
    listeners: {
        'delete-all': function () {
            var User = window.app.User;
            var EventBusLocal = window.app.EventBusLocal;
            var trash = document.getElementById('trashOn');
            for (var i = 0; i < User.trashData.length; i++) {
                User.deleteTaskData(User.currentLogin, '/tasks/' + User.trashData[i]);
            }
            EventBusLocal.publish('trash-off', trash);
            EventBusLocal.publish('trash-refresh', trash);
        },
        'select-all':function (dependency) {
            app.EventBusLocal.publish('trash-check-all',dependency);
        },
        'deselect-all':function (dependency) {
            app.EventBusLocal.publish('trash-uncheck-all',dependency);
        },
        'addTask-title':function(){
            app.Renderer.showModalAdd();
        }
    },

    init:function (el,dependency) {
        el.addEventListener('click', function (e) {
            if(controller.listeners[e.target.id]){
                controller.listeners[e.target.id](dependency);
            }
        });
        $('#addTask-title').tips('Add new task');
    }
};