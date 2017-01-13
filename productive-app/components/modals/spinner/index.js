import template from './template.jade'

app.Renderer.waitOverlay = function () {
    var el = document.createElement('div');
    el.innerHTML = template();
    document.body.appendChild(el);
    setTimeout(function(){
        document.body.removeChild(el);
    },2000);
};
