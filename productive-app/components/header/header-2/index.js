import template1 from  './markup.jade'
import {Controller} from './controller'


Router.renderHeaderDetailed = function(){
    var el = document.createElement('div');
    el.innerHTML = template1();
    document.body.appendChild(el);
    Controller.initCntrl(el);
};

