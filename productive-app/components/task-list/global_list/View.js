export var view = {
    moveToDaily (e) {
        if (e.target.classList.contains('drag-task')) {
            var context = this;
            var target = e.target;
            while (!target.parentNode.classList.contains('task')) {
                target = target.parentNode;
            }
            var key = target.parentNode.getAttribute('key');
            var currentDate = new Date();
            var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            app.User.setData(app.User.currentLogin, '/tasks/' + key + '/deadline',
                {
                    day: currentDate.getDate(),
                    month: monthArray[parseInt(currentDate.getMonth(), 10)],
                    year: currentDate.getFullYear(),
                    fullDate: (function () {
                        return monthArray[parseInt(currentDate.getMonth(), 10)] + ' ' +
                            currentDate.getDate() + ', ' + currentDate.getFullYear();
                    })()
                });
        }
    },
    showGlobalList(e){
        if (e.target.parentNode.classList.contains('drop-switch')) {
            var isActive = e.target.classList.contains('tabbed');
            var target = document.getElementsByClassName('arrow')[0];
            console.log('click');
            if(isActive){
                target.innerHTML = '&#xe906;';
            }else{
                target.innerHTML = '&#xe907;';
            }
            e.target.classList.toggle('tabbed');
        }
    }
};