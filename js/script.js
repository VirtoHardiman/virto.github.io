const hamburgerMenu = document.querySelector(".hamburger-menu input");
const nav = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("slide");
  document.getElementById("checkbox").checked = false;
});

const navLink = document.querySelectorAll("nav ul li");
for (var i = 0, length = navLink.length; i < length; i++) {
  navLink[i].addEventListener("click", () => {
    nav.classList.toggle("slide");
  });
}
// Event link
$(".page-scroll").on("click", function (event) {
  //   Get href content
  var target = $(this).attr("href");
  //   Catch the elemen
  var targetElemen = $(target);

  //   Move scroll
  $("html").animate(
    {
      scrollTop: targetElemen.offset().top - 50,
    },
    1000,
    "easeInOutExpo"
  );

  event.preventDefault();
});

// Scroll to the top button

// Get the button
var toTop = document.getElementById("scroll-top");

// Show button when exceed 600px from the top of page
window.onscroll = function () {
  scrollTopFunction();
};

function scrollTopFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    toTop.style.opacity = 1;
  } else {
    toTop.style.opacity = 0;
  }
}

// Scroll to the top
function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
