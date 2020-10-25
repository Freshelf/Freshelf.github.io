window.onscroll = function() { scrolling() };
var navbar = document.getElementById("navbar");

function scrolling() {
    if (document.body.scrollTop > window.innerHeight - window.innerWidth*0.04 || document.documentElement.scrollTop > window.innerHeight - window.innerWidth*0.04) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-5.5vw";
    }
}
