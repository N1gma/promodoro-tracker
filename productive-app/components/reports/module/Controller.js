import {options, createRandom30xArray, totalValueCount} from './options'

export class Controller{
    constructor(model,view){
        this.model = model;
        this.view = view;
    }
    initController(){
        var context = this;
        var obj = {};
        obj.activateTab = function (e) {
            for (var i = 0; i < e.currentTarget.children.length; i++) {
                if (e.currentTarget.children[i].classList.contains('active-tab')) {
                    e.currentTarget.children[i].classList.remove('active-tab');
                }
            }
            e.target.classList.add('active-tab');
            return obj;
        };
        obj.initInterface = function (e) {
            document.getElementsByClassName('interface-container-2')[0].addEventListener('click', function (e) {
                globalMethods.activateTab(e);
                if (e.target.id == 'day_tab') {
                    this.view.renderChart(options.pieView)
                }
                /*if (e.target.id == 'week_tab') chartInit(options.columnView);
                if (e.target.id == 'month_tab') chartInit(options.columnViewMonthly);*/
            });
        };
        context.model.patchData(function () {
            options.pieView.series[0].data = context.model.data.pieView;
            console.log(options.pieView);
            context.view.renderChart(options.pieView)
        });
        /*User.getData(User.currentLogin,'reports/pieView', function (callbackValue) {
            console.log(callbackValue)
            context.view.renderChart(options.pieView)
        })*/
    }

}