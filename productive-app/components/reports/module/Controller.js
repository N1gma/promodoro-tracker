import {options, createRandom30xArray, totalValueCount, columnMonthly} from './options'

export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    initController() {
        var context = this;
        document.getElementsByClassName('interface-container-2')[0].addEventListener('click', function (e) {
            context.view.activateTab(e);
            if (e.target.id == 'day_tab') {
                context.view.renderChart(options.pieView)
            }
            if (e.target.id == 'week_tab') {
                context.view.renderChart(options.columnView);
            }
            if (e.target.id == 'month_tab') {
                context.view.renderChart(options.columnViewMonthly);
            }
        });
        context.model.patchData(function () {
            options.pieView.series[0].data = context.model.data.pieView;
            options.columnView.series = context.model.data.columnView;
            options.columnViewMonthly.series = columnMonthly();
            console.log(options);
            context.view.renderChart(options.pieView)
        });
    }
}