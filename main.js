window.onscroll = function() { scrolling() };
var navbar = document.getElementById("navbar");

function scrolling() {
    if (document.body.scrollTop > window.innerHeight - window.innerWidth*0.055 || document.documentElement.scrollTop > window.innerHeight - window.innerWidth*0.055) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-5.5vw";
    }
}
function Read_More() {
    var dots = document.getElementById("dots");
    var more_txt = document.getElementById("more");
    var more_btn = document.getElementById("read_M");

    if(dots.style.display ==='none') {
        dots.style.display = "inline";
        more_txt.style.display = "none";
        more_btn.innerHTML = "Read more";
        }
    else 
        {
        dots.style.display = "none";
        more_txt.style.display = "inline";
        more_btn.innerHTML = "Read less";
        }
    
    }