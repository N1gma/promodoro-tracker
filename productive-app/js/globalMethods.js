var globalMethods = (function () {
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
        document.getElementsByClassName('interface-container')[0].addEventListener('click', function (e) {
            globalMethods.activateTab(e);

        });
        document.getElementsByClassName('interface-container-2')[0].addEventListener('click', function (e) {
            globalMethods.activateTab(e);
            if (e.target.id == 'day_tab') chartInit(options.pieView);
            if (e.target.id == 'week_tab') chartInit(options.columnView);
            if (e.target.id == 'month_tab') chartInit(options.columnViewMonthly);
        });
        document.getElementsByClassName('interface-container-3')[0].addEventListener('click', function (e) {
            globalMethods.activateTab(e);
        });
        return obj;
    };

    return obj;
})();




