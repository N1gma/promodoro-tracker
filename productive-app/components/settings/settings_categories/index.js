import template from './template.jade'


Renderer.renderSettingsCategories = function(){
    var el = document.createElement('div');
    el.innerHTML = template();
    document.getElementById('app-body').appendChild(el);
}