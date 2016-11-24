export var view = {
    syncChanges: function (target, callback) {
        while (target.parentNode.classList.contains('task') == false) {
            target = target.parentNode;
        }
        var key = target.parentNode.getAttribute('key');
        callback(key);
        document.getElementById(User.dataSnapShot[key].priority).checked = true;
        document.getElementById(User.dataSnapShot[key].category).checked = true;
        var estimationRecount = User.dataSnapShot[key].estimation.slice(-1);
        for (var i = 0; i < estimationRecount; i++) {
            document.getElementsByClassName('estimation-range')[0].children[i].classList.add('estimated');
        }
    }
};
