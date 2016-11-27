import template from './categories.jade'


Router.renderSettingsCategories = function(){
    console.log(history)
    var el = document.createElement('div');
    el.innerHTML = template();
    document.body.appendChild(el);
}