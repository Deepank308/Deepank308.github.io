$(function () {
    $(window).scroll(function () {

        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 50) {
            $('.navbar').slideUp(400);
        } else {
            $('.navbar').slideDown(400);
        }
    });
});
