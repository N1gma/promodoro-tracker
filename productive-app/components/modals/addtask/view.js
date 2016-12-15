export var view = {
    dropData:function(callback){
        User.updateTasksData();
        callback();
    },
    modalClose:function (e,el) {
        e.preventDefault();
        document.getElementById('app-body').removeChild(el);
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
