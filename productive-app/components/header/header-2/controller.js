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
        document.getElementById('trashOn').addEventListener('click', function (e) {
            var tasks = document.getElementsByClassName('task');
            if(e.currentTarget.classList.contains('active')){
                for (var i =0;i<tasks.length;i++){
                    tasks[i].classList.remove('trash');
                }
                e.currentTarget.classList.remove('active');
            }else{
                for (var i =0;i<tasks.length;i++){
                    tasks[i].classList.add('trash');
                }
                e.currentTarget.classList.add('active');
            }
        })
    }
};