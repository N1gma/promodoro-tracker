import {Model} from './Model';

export var View ={
    renderChart : function (options) {
        var chart = new Highcharts.Chart(options);
    },
    activateTab:function (e) {
        if(e.target.tagName.toUpperCase() === 'BUTTON'){
            for (var i = 0; i < e.currentTarget.children.length; i++) {
                if (e.currentTarget.children[i].classList.contains('active-tab')) {
                    e.currentTarget.children[i].classList.remove('active-tab');
                }
            }
            e.target.classList.add('active-tab');
        }
    }
};
