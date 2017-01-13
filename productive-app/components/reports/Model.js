export var Model = {
    data: {
        pieView: '',
        columnView: '',
        columnViewMonthly: ''
    },
    patchData: function (callback) {
        var User = window.app.User;
        User.getData(User.currentLogin, 'reports/pieView', function (value) {
            Model.data.pieView = value;
            console.log(Model.data.pieView);
            User.getData(User.currentLogin, 'reports/columnView', function (value) {
                Model.data.columnView = value;
                console.log(Model.data.columnView);
                User.getData(User.currentLogin, 'reports/columnViewMonthly', function (value) {
                    Model.data.columnViewMonthly = value;
                    console.log(Model.data.columnViewMonthly);
                    callback();
                });
            });
        });
    }

};