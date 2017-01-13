import template from  './template.jade';
import Controller from './controller';
import View from './view';
import css from '!!css-loader!less-loader!./style.less';

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
    el.appendChild(app.Renderer.helpers.getCss(css));
    let controller = new Controller(el, new View(el));
    controller.init();
};

