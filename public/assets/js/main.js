$(document).ready(function () {
    $('.destination').click(function () {
        $('.destination-list').show();
        $('.hotel-list').hide();
        $('.vehicle-list').hide();
    });

    $('.hotel').click(function () {
        $('.destination-list').hide();
        $('.vehicle-list').hide();
        $('.hotel-list').show();
    });

    $('.vehicle').click(function () {
        $('.destination-list').hide();
        $('.hotel-list').hide();
        $('.vehicle-list').show();
    });


    $('.customer').click(function () {
        $('.customer-payment').show();
        $('.customer-information').hide();
    });

    $('.payment').click(function () {
        $('.customer-payment').hide();
        $('.customer-information').hide();
        $('.order-complete').show();
    });

    $('.room').click(function () {
        $('.room-show').show();
        $('.overview-show').hide();
        $('.facilities-show').hide();
    });

    $('.overview').click(function () {
        $('.room-show').hide();
        $('.overview-show').show();
        $('.facilities-show').hide();
    });

    $('.facilities').click(function () {
        $('.room-show').hide();
        $('.overview-show').hide();
        $('.facilities-show').show();
    });

    $('.viewDeal').click(function () {
        $('.room-show').show();
        $('.overview-show').hide();
        $('.facilities-show').hide();
    });






    /*********************************************
      *  Navbar Responsive
      /*********************************************/
    $(".mobile-navbar").removeClass("hidden");
    $(".mobile-navbar").hide();

    $(".navbar-toggle").on("click", function () {
        $(".mobile-navbar").toggle("slide");
        $("#toggle-icon").toggleClass("fa-times");
    });

    $(window).click(function () {
        $(".mobile-navbar").hide("slide");
        $("#toggle-icon").addClass("fa-bars-staggered");
        $("#toggle-icon").removeClass("fa-times");
    });

    $(".navbar-toggle").on("click", function (event) {
        event.stopPropagation();
    });

    $(".mobile-navbar").on("click", function (event) {
        event.stopPropagation();
    });

    /*********************************************
    *  Scroll to top
    /*********************************************/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#scroll-to-top").addClass("fixed");
            $("#scroll-to-top").removeClass("hidden");
        } else {
            $("#scroll-to-top").removeClass("fixed");
            $("#scroll-to-top").addClass("hidden");
        }
    });


});