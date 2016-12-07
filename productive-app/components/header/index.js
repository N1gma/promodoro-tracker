import template1 from  './markup.jade'
import {Controller} from './controller'



Router.renderHeader = function(){
    var el = document.createElement('div');
    el.innerHTML = template1();
    document.body.appendChild(el);
    Controller.initCntrl(el);
    $('#reports').tips('Go to Reports');
    $('#settings').tips('Go to Settings');
    $('#log_out').tips('Sign out',true);
};

