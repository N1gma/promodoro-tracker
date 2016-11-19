var EventBus = {
    topics: {},

    subscribe: function(topic, listener) {
        // create the topic if not yet created
        if(!this.topics[topic]) this.topics[topic] = [];

        // add the listener
        this.topics[topic].push(listener);
    },

    publish: function(topic, data) {
        // return if the topic doesn't exist, or there are no listeners
        if(!this.topics[topic] || this.topics[topic].length < 1) return;

        // send the event to all listeners
        this.topics[topic].forEach(function(listener) {
            listener(data || {});
        });
    }
};

EventBus.subscribe('login',function(){
    Router.clearContent(document.body)
});
EventBus.subscribe('login',function(){
    Router.renderLog()
});
//----------------------------------
EventBus.subscribe('settings',function(){
    Router.clearContent(document.body)
});
EventBus.subscribe('settings',function(){
    Router.renderHeader()
});
EventBus.subscribe('settings',function(){
   // Router.renderTitle()
});
//----------------------------------
EventBus.subscribe('no-user', function () {
    EventBus.publish('login')
});