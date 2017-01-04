import template from  './template.jade';
import Controller from './controller';
import View from './view';
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
    let el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    let controller = new Controller(el, new View(el));
    controller.init();
};

