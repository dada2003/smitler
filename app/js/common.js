$(function () {
    $('#my-menu').mmenu({
        extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="салон красоты "Смитлер">'

        },
        offCanvas: {
            position: 'right'
        }
    });
    var api = $('#my-menu').data('mmenu');
    api.bind('opened', function () {
        $('.hamburger').addClass('is-active');
        api.bind('closed', function () {
            $('.hamburger').removeClass('is-active');
        })
    });

    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService()
        });
    });


    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left">', '<i class="fa fa-angle-double-right">'],
        responsiveClass: true,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });



    function carouselService() {
        $('.carousel-services-item').each(function () {
            var ths = $(this),
                thsh = ths.find('.carousel-services-content').outerHeight();
            ths.find('.carousel-services-image').css('min-height', thsh);
        })
    }

    carouselService();

    $('.carousel-services-composition h3').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });

//resize window
    function onResize() {
        $('.carousel-services-content').equalHeights();
    }
    onResize();
    window.onresize = function () {
        onResize()
    };

    $('section .h2').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    $('select').selectize({
        create:true
    });
//E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
            setTimeout(function() {
                // Done Functions
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });

});
