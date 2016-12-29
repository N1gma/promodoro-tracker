import template1 from  './template.jade';
import {Controller} from './controller';

/**
 * Method which append task-list header to page
 *
 * @memberOf app.Renderer
 * @instance
 */
app.Renderer.renderHeaderDetailed = function(){
    var el = document.createElement('div');
    el.innerHTML = template1();
    document.getElementById('app-body').appendChild(el);
    Controller.initCntrl(el);
};

