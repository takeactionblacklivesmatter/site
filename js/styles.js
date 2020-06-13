window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-bar").style.backgroundColor = "black";
  } else {
    document.getElementById("nav-bar").style.backgroundColor = "#0f0f0f";
  }
}