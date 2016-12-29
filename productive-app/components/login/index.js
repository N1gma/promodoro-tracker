import template from  './template.jade';

/**
 * Method which render login page
 *
 * @memberOf app.Renderer
 * @instance
 */
app.Renderer.renderLog = function(){
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
    document.getElementsByClassName('center-inputs')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        app.EventBus.publish('auth');
    });
};
