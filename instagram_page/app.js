window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

function home() {
  document.querySelector(".posts_page").style.display = "block";
  document.querySelector(".posts_page").style.display = "flex";
  document.querySelector(".like_page").style.display = "none";
}
function like() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".like_page").style.display = "block";
  document.querySelector(".like_page").style.display = "flex";
}
