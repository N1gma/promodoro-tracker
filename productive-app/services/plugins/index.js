(function ($) {
    $.fn.tips = function (tip, offset) {
        if (offset) {
            var offsetTriangle = 85;
            var offset = 90;
        } else {
            var offsetTriangle = 0;
            var offset = 0;
        }
        if (!$('.tipp').length) {
            var $tooltip = $('<div class="tipp"><span class="triangle"></span><p class="tip-text"></p></div>');
            $('body').append($tooltip);
            $tooltip.css({
                position: 'absolute',
                width: '113px',
                padding: '8px 3px',
                backgroundColor: '#cedeea',
                zIndex: 9999999999,
                color: '#3c5162',
                borderRadius: '3px',
                boxSizing: 'border-box',
                textAlign: 'center',
                display: 'none',
                font: '13px HelveticaBold, sans-serif',
                fontWeight: 'bold'
            });
            $('.triangle').css({
                content: '',
                display: 'block',
                width: '0',
                height: '0',
                position: 'absolute',
                borderLeft: '5px solid ',
                borderRight: '5px solid ',
                borderBottom: '5px solid ',
                borderColor: 'transparent',
                borderBottomColor: '#cedeea',
                left: '8px',
                top: '-5px'
            });
        }
        var $tooltip = $('.tipp');
        $(this).mouseenter(function (e) {
            if (e.target != $tooltip && e.target != $('.triangle')) {
                $tooltip.css({
                    top: e.pageY + 12 + 'px',
                    left: e.pageX - 10 - offset + 'px',
                    display: 'block'
                });
                $('.triangle').css({
                    left: 8 + offsetTriangle + 'px'
                });
                $('.tip-text').html(tip);
            }
            $(this).mousemove(function (e) {
                if (e.target != $tooltip && e.target != $('.triangle')) {
                    $tooltip.css({
                        top: e.pageY + 30 + 'px',
                        left: e.pageX - 10 - offset + 'px'
                    });
                    $('.triangle').css({
                        left: '8px' + offsetTriangle
                    });
                }
            })
        });
        $(this).mouseleave(function (e) {
            $(this).off('mousemove');
            $tooltip.css({
                display: 'none'
            })
        });
        return this
    };
    $.fn.accordeon = function () {
        var $accordHeads = $('.accordeon-head');
        console.log($accordHeads);
        console.log($(this));
        $(this).click(function (e) {
            if (e.target.classList.contains('accordeon-head')) {
                var link = $(e.target).attr('linked_block');
                var $link = $('#' + link);
                if($link.is(':visible')){
                    $link.slideUp("slow")
                }else{
                    $link.slideDown("slow");
                }
            }
        });
        /*$.each($accordHeads,function(index,elem){
         console.log(elem)
         })*/
        /*var targetId = $(this).attr('relativeId');
         var target = $('#'+targetId);
         return this;*/
        return this
    };
}(jQuery));

