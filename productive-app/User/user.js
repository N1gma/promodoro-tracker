var User = {
    currentLogin: 'oleksandr_chornobai',
    settings: {},
    reportsData:{},
    getSettings: function (account, callback) {
        var data = database.ref('users/' + account + '/user_settings');
        data.on('value', function (snapshot) {
            callback(snapshot.val());
        });
    },
    /*setSettings: function (account, data) {
        database.ref('users/' + account + '/user_settings').set(data);
    },*/
    saveSettings : function () {
        database.ref('users/' + User.currentLogin + '/user_settings').set(User.settings);
    },
    getData: function (account,data, callback) {
        var info = database.ref('users/' + account + '/' + data);
        info.on('value', function (snapshot) {
            callback(snapshot.val());
        });
    }
};