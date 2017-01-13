(function ($) {
    $.fn.tips = function (tip, offset) {
        var $target = $(this);
        var offsetTriangle, $tooltip, $triangle;
        var throttle = app.Renderer.helpers.throttle;
        if (offset) {
            offsetTriangle = 85;
            offset = 90;
        } else {
            offsetTriangle = 0;
            offset = 0;
        }
        if (!$('.tipp').length) {
            $tooltip = $('<div class="tipp"><span class="triangle"></span><p class="tip-text"></p></div>');
            $triangle = $tooltip.find('.triangle');
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
            $triangle.css({
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
        } else {
            $tooltip = $('.tipp');
        }
        $triangle = $tooltip.find('.triangle');
        var $tipText = $tooltip.find('.tip-text');
        var listeners = {
            mouseEnterListener: function(e){
                if (e.target !== $tooltip && e.target !== $triangle) {
                    $tooltip.css({
                        top: e.pageY + 12 + 'px',
                        left: e.pageX - 10 - offset + 'px',
                        display: 'block'
                    });
                    $triangle.css({
                        left: 8 + offsetTriangle + 'px'
                    });
                    $tipText.html(tip);
                }
                $target.mousemove(function (e) {
                    if (e.target !== $tooltip && e.target !== $triangle) {
                        $tooltip.css({
                            top: e.pageY + 30 + 'px',
                            left: e.pageX - 10 - offset + 'px'
                        });
                        $triangle.css({
                            left: '8px' + offsetTriangle
                        });
                    }
                });
            },
            offVision: function (e) {
                $target.off('mousemove');
                $tooltip.css({
                    display: 'none'
                });
            }
        };
        $target.mouseenter(listeners.mouseEnterListener);
        $target.mouseleave(listeners.offVision);
        $target.click(listeners.offVision);
        return this;
    };
    $.fn.accordeon = function () {
        var $target = $(this);
        var $heads = $target.find('.accordeon-head');
        var listener = function () {
            var $link = $('#' + $heads.attr('linked_block'));
            if ($link.is(':visible')) {
                $link.slideUp("slow");
            } else {
                $link.slideDown("slow");
            }
        };
        $heads.off('click', listener);
        $heads.on('click', listener);
        return this;
    };
}(window.$));

