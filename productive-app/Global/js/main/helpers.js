Renderer.helpers = {
    transformTime(time){
        var hours = '';
        var minutes = '';
        if (time / 60 >= 1)  hours = parseInt(time / 60) + 'h ';
        if (parseInt(time % 60) != 0)  minutes = parseInt(time % 60) + 'm';
        return hours + minutes;
    }
};

