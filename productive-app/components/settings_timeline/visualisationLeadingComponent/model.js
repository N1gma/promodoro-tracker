function Model (){
    this.data = {};
    this.event = new CustomEvent('dispatch',{
        bubbles: true,
        cancelable: true,
        details: undefined
    });
}

Model.prototype.getValuesFromDataComponent = function(data) {
    this.data = data;
    document.dispatchEvent(this.event);
    return this;
};
