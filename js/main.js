(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Navbar scroll effect
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 50) {
            $('#mainNav').addClass('scrolled');
        } else {
            $('#mainNav').removeClass('scrolled');
        }

        // Back to top button
        if (scroll > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });


    // Smooth scroll for nav links
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            var offset = 75; // navbar height
            $('html, body').animate({
                scrollTop: target.offset().top - offset
            }, 800, 'easeInOutExpo');

            // Close mobile nav
            $('.navbar-collapse').collapse('hide');
        }
    });


    // Active nav link on scroll
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop() + 100;
        $('.navbar-nav .nav-link').each(function () {
            var href = $(this).attr('href');
            if (href && href.startsWith('#')) {
                var section = $(href);
                if (section.length) {
                    if (section.offset().top <= scrollPos && section.offset().top + section.outerHeight() > scrollPos) {
                        $('.navbar-nav .nav-link').removeClass('active');
                        $(this).addClass('active');
                    }
                }
            }
        });
    });


    // Back to top
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

})(jQuery);

// WhatsApp contact form
function sendWhatsApp() {
    var name = document.getElementById('contactName').value.trim();
    var msg = document.getElementById('contactMsg').value.trim();

    if (!name || !msg) {
        alert('Por favor completa tu nombre y mensaje.');
        return;
    }

    var text = 'Hola KLVRA! Soy *' + name + '*.\n\n' + msg;

    window.open('https://wa.me/+56976988462?text=' + encodeURIComponent(text), '_blank');
}
