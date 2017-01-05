/**
 * @class
 */
class CEventBusLocalTimer {
    constructor() {
        this.topics = {};
    }

    /**
     * @memberOf CEventBusLocal
     * @param {String} topic
     * @param {function} listener
     */
    subscribe(topic, listener) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(listener);
    }

    /**
     * @memberOf CEventBusLocal
     * @param {String} topic
     * @param  [data]
     */
    publish(topic, data) {
        if (!this.topics[topic] || this.topics[topic].length < 1) {
            return;
        }
        this.topics[topic].forEach(function (listener) {
            listener(data || {});
        });
    }

    /**
     * @memberOf CEventBusLocal
     * @param {String} topic
     */
    unsubscribe(topic) {
        delete this.topics[topic];
    }
}

(function () {
    /**
     * @memberOf app
     * @type {CEventBusLocal}
     */
    app.EventBusLocalTimer = new CEventBusLocalTimer();
}());