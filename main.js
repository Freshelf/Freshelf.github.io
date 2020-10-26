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
    var inter_block = document.getElementById("inter");

    if(dots.style.display ==='none') {
        dots.style.display = "inline";
        more_txt.style.display = "none";
        more_btn.innerHTML = "Read more";
        inter_block.style.display = "block";
        }
    else 
        {
        dots.style.display = "none";
        more_txt.style.display = "inline";
        more_btn.innerHTML = "Read less";
        inter_block.style.display = "none";
        }
    
    }
function form1() {
    var cont = document.getElementById("form_content");
    var c_mbtn = document.getElementById("form_button1");

    if(cont.style.display ==='block') {
        cont.style.display = "none";
        c_mbtn.innerHTML = "Contact Us";
        }
    else 
        {
        cont.style.display = "block";
        c_mbtn.innerHTML = "Cancel";
        }
    
    }