import template1 from  './template.jade'
import {Controller} from './controller'


Renderer.renderHeaderDetailed = function(){
    var el = document.createElement('div');
    el.innerHTML = template1();
    document.getElementById('app-body').appendChild(el);
    Controller.initCntrl(el);
};

