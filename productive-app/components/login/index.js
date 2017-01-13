import template from  './template.jade';
import css from '!!css-loader!less-loader!./style.less';
/**
 * Method which render login page
 *
 * @memberOf app.Renderer
 */
app.Renderer.renderLog = function(){
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    el.appendChild(app.Renderer.helpers.getCss(css));
    document.getElementsByClassName('center-inputs')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        app.EventBus.publish('auth');
    });
};
