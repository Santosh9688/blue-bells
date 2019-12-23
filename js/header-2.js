$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $(".header-section-2").show();
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header-section-2").hide();
    }
});