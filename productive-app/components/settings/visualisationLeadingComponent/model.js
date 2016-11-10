function Model (){
    this.data = {};
    this.eventFires = new CustomEvent('data-changed',{
        bubbles: true,
        cancelable: true,
        details: undefined
    });
}

Model.prototype.getValuesFromDataComponent = function(data) {
    this.data = data;
    document.dispatchEvent(this.eventFires);
    return this;
};
