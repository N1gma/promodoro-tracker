import template from './categories.jade'


Router.renderSettingsCategories = function(){
    var el = document.createElement('div');
    el.innerHTML = template();
    document.body.appendChild(el);
}