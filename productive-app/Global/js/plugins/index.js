(function($){
    $.fn.tips = function(tip) {
        console.log($(this));
        console.log(tip);
        $.each($(this), function(){
            console.log($(this));
            $(this).append('<div>'+ tip +'</div>')
        });
        return this
    }
}(jQuery));

