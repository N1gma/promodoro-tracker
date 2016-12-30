import template from './template.jade';
import css from '!!css-loader!less-loader!./style/style.less';
/**
 * @namespace SettingsCategories
 * @memberOf app.Renderer
 */
/**
 * Method which render settings-categories in main page block
 *
 * @memberOf app.Renderer
 * @instance
 */
app.Renderer.renderSettingsCategories = function(){
    var el = document.createElement('div');
    var elCss = document.createElement('style');
    elCss.innerHTML = css['0'][1];
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    el.appendChild(elCss);
};