function Model() {
    this.data = {};
    this.eventFires = new CustomEvent('data-changed', {
        bubbles: true,
        cancelable: true,
        details: undefined
    });
}

Model.prototype.setDefaultData = function () {
    this.data = {
        'WORK TIME': 25,
        'SHORT BREAK': 5,
        'WORK ITERATION': 5,
        'LONG BREAK': 45,
        general: 335
    };
    document.dispatchEvent(this.eventFires);
    return this;
};

Model.prototype.getValuesFromDataComponent = function (data) {
    this.data = data;
    document.dispatchEvent(this.eventFires);
    return this;
};
