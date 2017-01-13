import template from  './template.jade';
import {Controller} from './controller';
import css from '!!css-loader!less-loader!./style.less';

/**
 * @namespace Header
 * @memberOf app.Renderer
 */
/**
 * Method which append default header to page
 *
 * @memberOf app.Renderer
 */
app.Renderer.renderHeader = function(){
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    el.appendChild(app.Renderer.helpers.getCss(css));
    Controller.initCntrl(el);
};

