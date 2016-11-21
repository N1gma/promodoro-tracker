var User = {
    currentLogin: 'oleksandr_chornobai',
    settings: {},
    reportsData: {},
    getSettings: function (account, callback) {
        var data = database.ref('users/' + account + '/user_settings');
        data.on('value', function (snapshot) {
            callback(snapshot.val());
        });
    },
    /*setSettings: function (account, data) {
     database.ref('users/' + account + '/user_settings').set(data);
     },*/
    saveSettings: function () {
        database.ref('users/' + User.currentLogin + '/user_settings').set(User.settings);
    },
    getData: function (account, data, callback) {
        var info = database.ref('users/' + account + '/' + data);
        info.on('value', function (snapshot) {
            callback(snapshot.val());
        });
    },
    setData: function (account, data) {
        database.ref('users/' + account + '/tasks').set(data);
    },
    updateData: function (data) {
        var path = 'users/' + User.currentLogin + '/tasks';
        var newKey = firebase.database().ref().child(path).push().key;
        path += '/' + newKey;
        var newData = {
            title: document.getElementById('title-input').value,
            description: document.getElementById('title-input').value,
            category: (function () {
                var tag = document.getElementsByClassName('categories-choose-list')[0];
                for (var i = 0; i < tag.children.length; i++) {
                    if (tag.children[i].firstElementChild.checked) {
                        console.log(tag.children[i].firstElementChild)
                        return tag.children[i].firstElementChild.innerHTML;
                    }
                }
            })(),
            deadline: document.getElementById('deadline-input').value,
            estimation: document.getElementsByClassName('estimation-range')[0].estimation,
            priority: (function () {
                var tag = document.getElementsByClassName('categories-choose-list')[1];
                for (var i = 0; i < tag.children.length; i++) {
                    if (tag.children[i].firstElementChild.checked) {
                        console.log(tag.children[i].firstElementChild);
                        return tag.children[i].firstElementChild.innerHTML;
                    }
                }
            })()
        };
        console.log(newData);
        firebase.database().ref(path).update(newData)
    }
};