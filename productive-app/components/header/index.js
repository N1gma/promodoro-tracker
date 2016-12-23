import template from  './template.jade'
import {Controller} from './controller'


Renderer.renderHeader = function(){
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    Controller.initCntrl(el);
};

