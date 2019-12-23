
/*$(window).on('scroll',function(){
    if($(window).scrollTop() > 400 ){
        $(".scroll-top-arrow").show();
    }
    else {
        $(".scroll-top-arrow").hide();
    }
});
*/

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $(".scroll-top-arrow").fadeIn(200);    // Fade in the arrow
    } else {
        $(".scroll-top-arrow").fadeOut(200);   // Else fade out the arrow
    }
});
$(".scroll-top-arrow").click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 700);
});