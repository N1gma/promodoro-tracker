import template from './template1.jade'
//import templateNotasks from './notasks.jade'
import Controller from './Controller'
import {tasks} from './Model'
//import {EventBusLocal} from '../../../Globals/eBusLocalTasks'


Router.renderReportsDaily = function () {
    var el = document.createElement('div');
    var controller = new Controller(tasks,EventBusLocal);
    controller.initController(function () {
        console.log(tasks.data);
        if(tasks.data){
            el.innerHTML = template({
                data: tasks.data
            });
        }
        document.body.appendChild(el);
        controller.setEventListeners();
    });
};