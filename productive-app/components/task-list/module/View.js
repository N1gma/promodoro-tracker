
export var tasksListView = {
    patchList: function () {
        User.getData(User.currentLogin, 'tasks', function (value) {
            if(!value || value == []){
                console.log('empty list');
            }
        })
    }

};

