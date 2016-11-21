export var Controller = {
    initCntrl: function () {
        document.getElementById('log_out').addEventListener('click', function (e) {
            firebase.auth().signOut();
        });
        document.getElementById('settings').addEventListener('click', function (e) {
            EventBus.publish('settings')
        });
        document.getElementById('reports').addEventListener('click', function (e) {
            EventBus.publish('reports')
        });
        document.getElementById('addTask').addEventListener('click', function (e) {
            Router.showModalAdd()
        });
    }
};