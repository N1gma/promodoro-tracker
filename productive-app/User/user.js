var User = {
    currentLogin: '',
    settings: {},
    trashData:[],
    reportsData: {},
    getSettings: function (account, callback) {
        var data = database.ref('users/' + account + '/user_settings');
        data.on('value', function (snapshot) {
            callback(snapshot.val());
        });
    },
    dataSnapShot: {},
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
    setData:function (account, path, data) {
        database.ref('users/' + account + path).set(data);
    },
    setTaskData: function (account, path, node) {
        database.ref('users/' + account + path).set((function () {
            var newData = {
                title: document.getElementById('title-input').value,
                description: document.getElementById('description-input').value,
                category: (function () {
                    var tag = document.getElementsByClassName('categories-choose-list')[0];
                    for (var i = 0; i < tag.children.length; i++) {
                        if (tag.children[i].firstElementChild.checked) {
                            console.log(tag.children[i].firstElementChild);
                            return tag.children[i].firstElementChild.value.toLowerCase();
                        }
                    }
                })(),
                deadline: (function () {
                    var date = document.getElementById('deadline-input').value;
                    var obj = {
                        fullDate: date,
                        month: date.slice(0, date.indexOf(' ')),
                        day: date.slice(date.indexOf(' ') + 1, date.indexOf(',')),
                        year: date.slice(date.indexOf(',') + 2)
                    }
                    return obj;
                })(),
                estimation: (function () {
                    var parent = document.getElementsByClassName('estimation-range')[0];
                    for (var i = 0, j = 0; parent.children[i]; i++) {
                        if (parent.children[i].classList.contains('estimated')) j++;
                    }
                    return 'estimate-' + j;
                })(),
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
    deleteTaskData: function (account, path) {
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
            //deadline: document.getElementById('deadline-input').value,
            deadline: (function () {
                var date = document.getElementById('deadline-input').value;
                var obj = {
                    fullDate: date,
                    month: date.slice(0, date.indexOf(' ')),
                    day: date.slice(date.indexOf(' ') + 1, date.indexOf(',')),
                    year: date.slice(date.indexOf(',') + 2)
                }
                return obj;
            })(),
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