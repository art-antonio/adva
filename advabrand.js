const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  if (navlinks.style.display === "block") {
    navlinks.style.display = "none";
  } else {
    navlinks.style.display = "block";
  }
});
