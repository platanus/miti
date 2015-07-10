(function($) {
    "use strict";

    function parallax() {
        var scrollPosition = $(window).scrollTop();
        $('.boxllamado').css('opacity', ((100 - scrollPosition / 2) * 0.01));
    }

    $(document).ready(function() {

        /* header fixed
    ================================================== */
        
        $(window).bind('scroll', function() {
           var top = $('#nosotros').position().top;
                if ($(window).scrollTop() > top - 120) {
                    $('header').addClass('fixed');
                }
                else {
                    $('header').removeClass('fixed');
                }
        });


        /*	Local Scroll
	================================================== */

        jQuery('.navbar').localScroll({
            offset: 0,
            duration: 500
        });

        /*	Active Menu
	================================================== */

        jQuery(function() {
            var sections = jQuery('section');
            var navigation_links = jQuery('nav a');
            sections.waypoint({
                handler: function(direction) {
                    var active_section;
                    active_section = jQuery(this);
                    if (direction === "up") active_section = active_section.prev();
                    var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
                    navigation_links.parent().removeClass("active");
                    active_link.parent().addClass("active");
                    active_section.addClass("active-section");
                },
                offset: '20%'
            });
        });

        /*	Pretty Photo
	================================================== 

        jQuery('#gallery a').attr('rel', 'prettyPhoto');
        jQuery("a[rel^='prettyPhoto']").prettyPhoto();
*/
        /*	Bootstrap Carousel
	================================================== */

    $('.btn-detalle').click(function(e)
        {
            e.preventDefault();
            $('.btn-detalle').toggleClass('active'); 
            $('.capa-detalle').toggleClass('active');
            
            $('#ico-mas').toggleClass('show');
            $('#ico-menos').toggleClass('show');
        });

        jQuery('.carousel').carousel({
          interval: 5000
        })
    });

    jQuery(window).load(function() {

        $('.section').each(function() {
            animate_start($(this));
        });

    });
        /*	Animation with Waypoints
	================================================== */

    var animate_start = function($this) {
        $this.find('.animate').each(function(i) {
            var $item = jQuery(this);
            var animation = $item.data("animate");

            $item.waypoint(function(direction) {
                $item.css({
                    '-webkit-animation-delay': (i * 0.1) + "s",
                    '-moz-animation-delay': (i * 0.1) + "s",
                    '-ms-animation-delay': (i * 0.1) + "s",
                    '-o-animation-delay': (i * 0.1) + "s",
                    'animation-delay': (i * 0.1) + "s"
                });
                $item.removeClass('animate').addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    jQuery(this).removeClass(animation + ' animated');
                });
            }, {
                offset: '85%',
                triggerOnce: true
            });
        });
    };
})(jQuery);
