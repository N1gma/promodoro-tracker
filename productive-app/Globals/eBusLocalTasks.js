var EventBusLocal = {
    topics: {},

    subscribe: function (topic, listener) {
        // create the topic if not yet created
        if (!this.topics[topic]) this.topics[topic] = [];

        // add the listener
        this.topics[topic].push(listener);
    },

    publish: function (topic, data) {
        // return if the topic doesn't exist, or there are no listeners
        if (!this.topics[topic] || this.topics[topic].length < 1) return;

        // send the event to all listeners
        this.topics[topic].forEach(function (listener) {
            listener(data || {});
        });
    }
};

EventBusLocal.subscribe('trash-drop',function (data) {
    var e = data.e;
    var context = data.context;
    if (e.target.classList.contains('category') && !e.target.classList.contains('toogled') && e.target.parentNode.classList.contains('trash')) {
        e.target.innerHTML = '&#xe910;';
        e.target.classList.add('toogled');
        console.log(context)
        if (context.model.checkTrashBuffer(e.target.parentNode.getAttribute('key'))) {
            context.model.trashBufferZone.push(e.target.parentNode.getAttribute('key'));
            if (context.model.trashBufferZone.length > 0) {
                document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
                document.getElementsByClassName('trash-counter')[0].innerHTML = context.model.trashBufferZone.length;
            } else {
                document.getElementsByClassName('trash-counter')[0].style.display = 'none';
            }
            console.log(context.model.trashBufferZone)
        }
    } else if (e.target.classList.contains('toogled') && e.target.parentNode.classList.contains('trash')) {
        e.target.innerHTML = '&#xe912;';
        e.target.classList.remove('toogled');
        context.model.trashBufferZone.splice(context.model.trashBufferZone.indexOf(e.target.parentNode.getAttribute('key')), 1);
        if (context.model.trashBufferZone.length > 0) {
            document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
            document.getElementsByClassName('trash-counter')[0].innerHTML = context.model.trashBufferZone.length;
        } else {
            document.getElementsByClassName('trash-counter')[0].style.display = 'none';
        }
        console.log(context.model.trashBufferZone)
    }
});