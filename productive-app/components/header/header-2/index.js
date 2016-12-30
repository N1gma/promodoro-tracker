import template1 from  './template.jade';
import {Controller} from './controller';
/**
 * @namespace HeaderDetailed
 * @memberOf app.Renderer
 */
/**
 * Method which append task-list header to page
 *
 * @memberOf app.Renderer
 */
app.Renderer.renderHeaderDetailed = function(){
    var el = document.createElement('div');
    el.innerHTML = template1();
    document.getElementById('app-body').appendChild(el);
    Controller.initCntrl(el);
};

