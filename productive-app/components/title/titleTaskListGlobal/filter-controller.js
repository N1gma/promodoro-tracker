export var controllerFilter = {
    listeners: {
        'all':function (type,target) {
            controllerFilter.activateTab(target)
            EventBusLocal.publish('filter-tasks', type)
        },
        'urgent':function (type,target) {
            controllerFilter.activateTab(target)
            EventBusLocal.publish('filter-tasks', type)
        },
        'high':function (type,target) {
            controllerFilter.activateTab(target)
            EventBusLocal.publish('filter-tasks', type)
        },
        'middle':function (type,target) {
            controllerFilter.activateTab(target)
            EventBusLocal.publish('filter-tasks', type)
        },
        'low':function (type,target) {
            controllerFilter.activateTab(target)
            EventBusLocal.publish('filter-tasks', type)
        }

    },
    init:function (el) {
        var context = this;
        //this.listeners['filter-all']();
        el.addEventListener('click', function (e) {
            var identifier = e.target.id.slice(0,-1);
            if(context.listeners[identifier]){
                context.listeners[identifier](identifier,e.target);
                EventBusLocal.publish('trash-off',document.getElementById('trashOn'));
                EventBusLocal.publish('trash-refresh');
            }
        })
    },
    activateTab:function (target) {
        for (var i = 0; i < target.parentNode.children.length; i++) {
            if (target.parentNode.children[i].classList.contains('active-tab')) {
                target.parentNode.children[i].classList.remove('active-tab');
            }
        }
        target.classList.add('active-tab');
    }
};