var User = {
    currentLogin: '',
    settings: {},
    reportsData: {},
    getSettings: function (account, callback) {
        var data = database.ref('users/' + account + '/user_settings');
        data.on('value', function (snapshot) {
            callback(snapshot.val());
        });
    },
    dataSnapShot:{},
    /*setSettings: function (account, data) {
     database.ref('users/' + account + '/user_settings').set(data);
     },*/
    saveSettings: function () {
        database.ref('users/' + User.currentLogin + '/user_settings').set(User.settings);
    },
    getData: function (account, data, callback) {
        var info = database.ref('users/' + account + '/' + data);
        info.on('value', function (snapshot) {
            User.dataSnapShot = snapshot.val();
            callback(User.dataSnapShot);
        });
    },
    setTaskData: function (account, path,callback) {
        database.ref('users/' + account + path).set((function () {
            var newData = {
                title: document.getElementById('title-input').value,
                description: document.getElementById('title-input').value,
                category: (function () {
                    var tag = document.getElementsByClassName('categories-choose-list')[0];
                    for (var i = 0; i < tag.children.length; i++) {
                        if (tag.children[i].firstElementChild.checked) {
                            console.log(tag.children[i].firstElementChild);
                            return tag.children[i].firstElementChild.value.toLowerCase();
                        }
                    }
                })(),
                deadline: document.getElementById('deadline-input').value,
                estimation: 'estimate-' + document.getElementsByClassName('estimation-range')[0].estimation,
                priority: (function () {
                    var tag = document.getElementsByClassName('categories-choose-list')[1];
                    for (var i = 0; i < tag.children.length; i++) {
                        if (tag.children[i].firstElementChild.checked) {
                            console.log(tag.children[i].firstElementChild);
                            return tag.children[i].firstElementChild.value.toLowerCase();
                        }
                    }
                })()
            };
            console.log(newData);
            return newData;
        })());
    },
    deleteTaskData: function (account,path) {
        database.ref('users/' + account + path).remove();
    },
    updateTasksData: function () {
        var path = 'users/' + User.currentLogin + '/tasks';
        var newKey = database.ref().child(path).push().key;
        path += '/' + newKey;
        var newData = {
            title: document.getElementById('title-input').value,
            description: document.getElementById('title-input').value,
            category: (function () {
                var tag = document.getElementsByClassName('categories-choose-list')[0];
                for (var i = 0; i < tag.children.length; i++) {
                    if (tag.children[i].firstElementChild.checked) {
                        console.log(tag.children[i].firstElementChild);
                        return tag.children[i].firstElementChild.value.toLowerCase();
                    }
                }
            })(),
            deadline: document.getElementById('deadline-input').value,
            estimation: 'estimate-' + document.getElementsByClassName('estimation-range')[0].estimation,
            priority: (function () {
                var tag = document.getElementsByClassName('categories-choose-list')[1];
                for (var i = 0; i < tag.children.length; i++) {
                    if (tag.children[i].firstElementChild.checked) {
                        console.log(tag.children[i].firstElementChild);
                        return tag.children[i].firstElementChild.value.toLowerCase();
                    }
                }
            })()
        };
        console.log(newData);
        database.ref(path).update(newData);
    }
};