import template from './template.jade'
import css from '!!css-loader!less-loader!./style/style.less';

Renderer.renderSettingsCategories = function(){
    var el = document.createElement('div');
    var elCss = document.createElement('style');
    elCss.innerHTML = css['0'][1];
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    el.appendChild(elCss);
};