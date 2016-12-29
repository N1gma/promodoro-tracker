/**
 * memberOf app.Renderer
 * @namespace
 */
app.Renderer.helpers = {
    /**
     * Transforms Minutes in Minutes/Hours+'h' + Minutes%Hours+'m' (130 -> 2h 10m)
     *
     * memberOf app.Renderer
     * @instance
     * returns {String}
     * @param {Number} time
     */
    transformTime(time){
        var hours = '';
        var minutes = '';
        if (time / 60 >= 1) {
            hours = parseInt(time / 60) + 'h ';
        }
        if (parseInt(time % 60) !== 0) {
            minutes = parseInt(time % 60) + 'm';
        }
        return hours + minutes;
    }
};

