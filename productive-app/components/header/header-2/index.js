import template1 from  './markup.jade'
import {Controller} from './controller'


Router.renderHeaderDetailed = function(){
    var el = document.createElement('div');
    el.innerHTML = template1();
    document.body.appendChild(el);
    Controller.initCntrl(el);
    $('#addTask').tips('Add new task');
    $('#trashOn').tips('Activate delete mode');
    $('#reports').tips('Go to Reports');
    $('#settings').tips('Go to Settings');
    $('#log_out').tips('Sign out',true);
};

