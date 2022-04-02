//mobile nav toggle //

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/// sroll to top button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style =
      "opacity: 0.9; pointer-events: auto; transform: translatex(0px);";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style = "opacity: 0; pointer-events: none;";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// sections load animation trigger
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    //   // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible

      if (entry.isIntersecting) {
        document;
        entry.target.classList.add("show");
        console.log(entry.target);
      }
    });
  },
  {
    rootMargin: "-25% 0px -25% 0px",
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
