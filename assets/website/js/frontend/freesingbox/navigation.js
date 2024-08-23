//jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($("#navigation").offset().top > 160) {
            $(".navbar-fixed-top").addClass("header-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("header-collapse");
        }
    });