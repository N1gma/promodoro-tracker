
document.addEventListener("DOMContentLoaded", function component1() {
    var view = new View(document.getElementsByClassName('timeline-container')[0]);
    var model = new Model();
    var controller = new Controller(model, view);
    initComponent1();
    controller.start();
});

function transformTime(time) {
    var hours = '';
    var minutes = '';
    if (time / 60 >= 1)  hours = parseInt(time / 60) + 'h ';
    if (parseInt(time % 60) != 0)  minutes = parseInt(time % 60) + 'm';
    return hours + minutes;
}

function CustomEvent(event, params) {
    params = params || {bubbles: false, cancelable: false, detail: undefined};
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
}

CustomEvent.prototype = window.Event.prototype;

window.CustomEvent = CustomEvent;
