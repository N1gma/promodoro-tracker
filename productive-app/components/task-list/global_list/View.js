export var view = {
    moveToDaily: function (e) {
        if (e.target.classList.contains('drag-task')) {
            var context = this;
            var target = e.target;
            while (!target.parentNode.classList.contains('task')) {
                target = target.parentNode;
            }
            var key = target.parentNode.getAttribute('key');
            var currentDate = new Date();
            var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            User.setData(User.currentLogin, '/tasks/' + key + '/deadline', {
                day: currentDate.getDate(),
                month: monthArray[parseInt(currentDate.getMonth(),10)],
                year: currentDate.getFullYear(),
                fullDate: (function () {
                    return monthArray[parseInt(currentDate.getMonth(),10)] + ' ' +
                        currentDate.getDate()+', '+currentDate.getFullYear();
                })()
            })
        }
    }
};