window.addEventListener("offline", function(e) {
    Notifications.spawnNotification({
        body:'gone offline',
        title:'msg',
        icon: 'Global/img/question-mark.png'
    });
    EventBus.publish('notify',{
        msg:'Gone offline',
        type:'fail'
    });
});

window.addEventListener("online", function(e) {
    Notifications.spawnNotification({
        body:'gone online',
        title:'msg',
        icon: 'Global/img/question-mark.png'
    });
    EventBus.publish('notify',{
        msg:'Gone online',
        type:'success'
    });
});
