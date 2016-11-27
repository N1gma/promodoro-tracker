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

EventBusLocal.subscribe('trash-drop', function (data) {
    var e = data.e;
    var context = data.context;
    if (e.target.classList.contains('category') && !e.target.classList.contains('toogled') && e.target.parentNode.classList.contains('trash')) {
        e.target.innerHTML = '&#xe910;';
        e.target.classList.add('toogled');
        if (context.model.checkTrashBuffer(e.target.parentNode.getAttribute('key'))) {
            User.trashData.push(e.target.parentNode.getAttribute('key'));
            if (User.trashData.length > 0) {
                document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
                document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
            } else {
                document.getElementsByClassName('trash-counter')[0].style.display = 'none';
            }
            console.log(User.trashData)
        }
    } else if (e.target.classList.contains('toogled') && e.target.parentNode.classList.contains('trash')) {
        e.target.innerHTML = '&#xe912;';
        e.target.classList.remove('toogled');
        User.trashData.splice(User.trashData.indexOf(e.target.parentNode.getAttribute('key')), 1);
        if (User.trashData.length > 0) {
            document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
            document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
        } else {
            document.getElementsByClassName('trash-counter')[0].style.display = 'none';
        }
        console.log(User.trashData)
    }
});

EventBusLocal.subscribe('trash-check-all', function (dependency) {
    var elems = document.getElementsByClassName('task');
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].parentNode.classList.contains(dependency)) {
            elems[i].firstElementChild.innerHTML = '&#xe910;';
            elems[i].firstElementChild.classList.add('toogled');
            var key = elems[i].getAttribute('key');
            console.log(key)
            if (User.trashData.indexOf(key) == -1) {
                User.trashData.push(key);
                if (User.trashData.length > 0) {
                    document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
                    document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
                } else {
                    document.getElementsByClassName('trash-counter')[0].style.display = 'none';
                }
                console.log(User.trashData)
            }
        }
    }
})

EventBusLocal.subscribe('trash-uncheck-all', function (dependency) {
    var elems = document.getElementsByClassName('task');
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].parentNode.classList.contains(dependency)) {
            elems[i].firstElementChild.innerHTML = '&#xe912;';
            elems[i].firstElementChild.classList.remove('toogled');
            var key = elems[i].getAttribute('key');
            console.log(key)
            if (User.trashData.indexOf(key) != -1) {
                User.trashData.splice(User.trashData.indexOf(key),1);
                if (User.trashData.length > 0) {
                    document.getElementsByClassName('trash-counter')[0].style.display = 'inline-block';
                    document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
                } else {
                    document.getElementsByClassName('trash-counter')[0].style.display = 'none';
                }
                console.log(User.trashData)
            }
        }
    }
})

EventBusLocal.subscribe('trash-refresh', function (e) {
    document.getElementsByClassName('trash-counter')[0].innerHTML = User.trashData.length;
    document.getElementsByClassName('trash-counter')[0].style.display = 'none';
    User.trashData = [];
});

/*EventBusLocal.subscribe('trash-on',function(e){
 var tasks = document.getElementsByClassName('task');
 if(e.currentTarget.classList.contains('active')){
 for (var i =0;i<tasks.length;i++){
 tasks[i].classList.remove('trash');
 }
 e.currentTarget.classList.remove('active');
 }else{
 for (var i =0;i<tasks.length;i++){
 tasks[i].classList.add('trash');
 }
 e.currentTarget.classList.add('active');
 }
 var labels = document.getElementsByClassName('left-side');
 for( var i = 0;i<labels.length;i++){
 if(labels[i].classList.contains('hidden')){
 labels[i].classList.remove('hidden');
 }else if(!labels[i].classList.contains('hidden')){
 labels[i].classList.add('hidden');
 }
 }
 });*/


EventBusLocal.subscribe('trash-on', function (target) {
    var tasks = document.getElementsByClassName('task');
    target.classList.add('active')

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].classList.add('trash');
    }

    var labels = document.getElementsByClassName('left-side');
    for (var i = 0; i < labels.length; i++) {
        labels[i].classList.remove('hidden');

    }
});

EventBusLocal.subscribe('trash-off', function (target) {
    var tasks = document.getElementsByClassName('task');
    target.classList.remove('active');

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].classList.remove('trash');
    }

    var labels = document.getElementsByClassName('left-side');
    for (var i = 0; i < labels.length; i++) {

        labels[i].classList.add('hidden');
    }
    //EventBusLocal.publish('trash-refresh')
});