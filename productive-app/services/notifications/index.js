EventBus.subscribe('notification', function (msg) {
    console.log('sadasd')
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
