/* Scrool bookmark
-------------------------------------- */
$('a[href^="#"]').click(function() {
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 1000);
    return false;
});



/* Scroll back to top
-------------------------------------- */
let duration = 500;
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('#toTop').fadeIn(duration);
    } else {
        $('#toTop').fadeOut(duration);
    }
});

$('#toTop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, duration);
    return false;
});


/* Hover wrap images
-------------------------------------- */
$(function() {
    $('img').hover(
        function() {
            $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
        },
        function() {
            $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
    );
});


/* Fade scroll
-------------------------------------- */
window.onload = function() {
    $(window).scroll(function() {
        $('.fadeDown, .fadeLeft').each(function() {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 300) {
                $(this).addClass('ef-slide');
            }
        });
    }).trigger("scroll");
}

/* Hover wrap images
-------------------------------------- */
$('img').hover(
    function() {
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    },
    function() {
        $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
);


/* Active navWipe sroll
-------------------------------------- */
var myScrollPos = $('a.active').offset().left + $('a.active').outerWidth(true)/2 + $('.wrapWipe').scrollLeft() - $('.wrapWipe').width()/2;
$('.wrapWipe').scrollLeft(myScrollPos);

/* Zoom
-------------------------------------- */
(function($, $window) {
    "use strict";
    /**
     * Hide container
     */
    var hideContainer = function() {
        var hiddenContainer = document.createElement('style'),
            cssText = '#wrapper { visibility: hidden; }';
 
        hiddenContainer.setAttribute('type', 'text/css');
        hiddenContainer.appendChild(document.createTextNode(cssText));
 
        $('head').append(hiddenContainer);
    };
    /**
     * Adjust viewport
     */
    var adjustViewport = function() {
        var setting = 'target-densitydpi=device-dpi,width=device-width,user-scalable=no',
            ratio, currentRatio;
 
        $('meta[name="viewport"]').attr('content', setting);
 
        $window
            .on('load.adjustViewport resize.adjustViewport', function() {
                currentRatio = $window.width() / 980;
                if (currentRatio === ratio) {
                    return;
                }
                ratio = currentRatio;
                $('html').css('zoom', ratio);
                $('#wrapper').css('visibility', 'visible');
            })
            .trigger('resize.adjustViewport');
    };
    if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
        hideContainer();
 
        var wBr = $(window).width();
        if (wBr > 600) {
            $(adjustViewport);
        }
 
    }
})(window.jQuery, window.jQuery(window));
 
 
/* Menu accordion
-------------------------------------- */
var wBrowser = $(window).width();
if (wBrowser <= 640) {
    $('.question-answer h3:first').addClass('active');
    $('.cont-answer').hide();
    $('.cont-answer:first').slideDown();
    $('.question-answer h3').click(function() {
        var hasClass = $(this).hasClass('active');
        if (!hasClass) {
            $('.cont-answer').slideUp();
            $('.question-answer h3').removeClass('active');
            var $get_answer = $(this).next();
            $get_answer.slideToggle(400);
            if ('.cont-answer:visible') {
                $get_answer.prev().addClass('active');
            }
        } else {
            $('.cont-answer').slideUp();
            $('.question-answer h3').removeClass('active');
        }
    });
};


/* Check button */
var open = 'images/btn_open.png';
var close = 'images/btn_close.png';

$('.accordion').click(function(event) {
    event.preventDefault();
    var thisElem = $(this).find('img');
    if (thisElem.attr('src') === open) {
        thisElem.attr('src', close);
    } else {
        thisElem.attr('src', open)
    }
    
    $(this).stop().next().slideToggle();
});
 
 
/* Reponsive for meta
-------------------------------------- */
$(window).resize(function() {
    if (screen.width <= 640) {
        $('meta[name="viewport"]').attr('content', 'width=640, user-scalable=no, shrink-to-fit=no');
    } else if (screen.width <= 1440) {
        $('meta[name="viewport"]').attr('content', 'width=1440, user-scalable=no, shrink-to-fit=no');
    } else {
        $('meta[name="viewport"]').attr('content', 'width=device-width, user-scalable=no, shrink-to-fit=no');
    }
}).resize();


/* Match height
-------------------------------------- */
equalheight = function(container) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
$(window).load(function() {
    equalheight('.sectionThumbnail .items');
});
$(window).resize(function() {
    equalheight('.sectionThumbnail .items');
});

