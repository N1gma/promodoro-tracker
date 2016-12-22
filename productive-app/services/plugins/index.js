(function ($) {
    $.fn.tips = function (tip, offset) {
        var target = $(this);
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
        var mouseEnterListener = function (e) {
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
            target.mousemove(function (e) {
                if (e.target != $tooltip && e.target != $('.triangle')) {
                    target.off('mouseenter');
                    $tooltip.css({
                        top: e.pageY + 30 + 'px',
                        left: e.pageX - 10 - offset + 'px'
                    });
                    $('.triangle').css({
                        left: '8px' + offsetTriangle
                    });
                }
            })

        };
        target.mouseenter(mouseEnterListener);
        target.mouseleave(function (e) {
            target.off('mousemove');
            target.mouseenter(mouseEnterListener);
            $tooltip.css({
                display: 'none'
            })
        });
        return this
    };
    $.fn.accordeon = function () {
        var heads = $('.accordeon-head');
        var listener = function (e) {
            var link = ('#' + $(e.target).attr('linked_block'));
            if ($(link).is(':visible')) {
                $(link).slideUp("slow");
            } else {
                $(link).slideDown("slow");
            }
        };
        $(this).off('click', listener);
        $(this).on('click', '.accordeon-head', listener);
        return this
    };
}(jQuery));

