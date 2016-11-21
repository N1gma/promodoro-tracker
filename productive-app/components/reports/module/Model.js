export var Model = {
    data: {
        pieView: '',
        columnView: '',
        columnViewMonthly: ''
    },
    patchData: function (callback) {
        User.getData(User.currentLogin, 'reports/pieView', function (value) {
            Model.data.pieView = value;
            console.log(Model.data.pieView);
            User.getData(User.currentLogin, 'reports/columnView', function (value) {
                Model.data.columnView = value;
                User.getData(User.currentLogin, 'reports/columnViewMonthly', function (value) {
                    Model.data.columnViewMonthly = value;
                    callback();
                })
            });
        });

    }

};