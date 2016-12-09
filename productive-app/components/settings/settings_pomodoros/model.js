export default function Model() {
    this.data = {};
    this.eventFires = new CustomEvent('data-changed', {
        bubbles: true,
        cancelable: true,
        details: undefined
    });
}

Model.prototype.setDefaultData = function () {
    var context = this;
    User.getSettings(User.currentLogin, function (value) {
        context.data = value;
        User.settings = value;
        document.dispatchEvent(context.eventFires);
        return context;
    });
};

Model.prototype.getValuesFromDataComponent = function (data) {
    this.data = data;
    document.dispatchEvent(this.eventFires);
    return this;
};

