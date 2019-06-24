window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("fixed-nav").style.top = "0";
  } else {
    document.getElementById("fixed-nav").style.top = "-50px";
  }
}