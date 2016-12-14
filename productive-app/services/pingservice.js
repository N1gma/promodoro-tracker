EventBus.subscribe('notification', function (msg) {
<<<<<<< HEAD
=======
    console.log('sadasd')
>>>>>>> 93a67568c966f9f526f8cddb61ea9e856443af87
    if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
    }
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        spawnNotification(msg.body, msg.icon, msg.title);
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                spawnNotification(msg.body, msg.icon, msg.title);
            }
        });
    }
});

function spawnNotification(theBody, theIcon, theTitle) {
    var options = {
        body: theBody,
        icon: theIcon
    };
    var n = new Notification(theTitle, options);
    setTimeout(n.close.bind(n), 5000);
}

window.addEventListener("offline", function(e) {
    console.log("offline");
    EventBus.publish('notification',{
        body: 'gone offline',
        title:'msg'
    })
});

window.addEventListener("online", function(e) {
    console.log("online");
    EventBus.publish('notification',{
        body: 'gone online',
        title:'msg'
    })
});
