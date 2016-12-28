(function () {
    window.Notifications = {
        spawnNotification(opt) {
            if (!("Notification" in window)) {
                alert("This browser does not support system notifications");
            }
            else if (Notification.permission === "granted") {
                var options = {
                    body: opt.body,
                    icon: opt.icon
                };
                var n = new Notification(opt.title, options);
                setTimeout(n.close.bind(n), 5000);
            }
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    if (permission === "granted") {
                        var options = {
                            body: opt.body,
                            icon: opt.icon
                        };
                        var n = new Notification(opt.title, options);
                        setTimeout(n.close.bind(n), 5000);
                    }
                });
            }
        }
    };
}());
