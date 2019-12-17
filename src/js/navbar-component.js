$(function() {
    var navbar = $("#navbar");
    var height = window.innerHeight;
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= height) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }
    });
  
});


$("#hamburger-menu").click(function() {
    document.getElementsByClassName("mid-site-nav")[0].style.display="block";
}) 
