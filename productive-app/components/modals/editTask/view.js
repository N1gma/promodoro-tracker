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
    },
    modalClose:function (e,el) {
        e.preventDefault();
        document.body.removeChild(el);
    },
    modalConfirmEdit:function (e,el,target) {
        e.preventDefault();
        while (target.parentNode.classList.contains('task') == false) {
            target = target.parentNode;
        }
        var keyy = target.parentNode.getAttribute('key');
        User.setTaskData(User.currentLogin, '/tasks/' + keyy, target.parentNode);
        document.body.removeChild(el);
    },
    modalRemove:function (e,el,target) {
        e.preventDefault();
        while (target.parentNode.classList.contains('task') == false) {
            target = target.parentNode;
        }
        var keyy = target.parentNode.getAttribute('key');
        User.deleteTaskData(User.currentLogin, '/tasks/' + keyy);
        document.body.removeChild(el);
    },
    estimationRangeReview:function (e) {
        if (e.target.tagName.toUpperCase() == 'LI') {
            var parent = e.currentTarget;
            for (var i = 0; i < parent.children.length; i++) {
                parent.children[i].classList.remove('estimated');
            }
            for (var i = 0, j = 0; parent.children[i] != e.target; i++, j++) {
                parent.children[i].classList.add('estimated');
            }
            e.target.classList.add('estimated');
            e.currentTarget.estimation = j+1;
        }
    }
};
