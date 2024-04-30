const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
const container = document.getElementById('logo-container');


function scrollLogos() {
    const scrollPos = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

  
    if (scrollPos === 0) {
        container.scrollBy(1, 0);
    } else if (scrollPos === maxScroll) {
        container.scrollBy(-1, 0);
    } else {
        container.scrollBy(1, 0);
    }
}

setInterval(scrollLogos, 50); 

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("a[href='#contact-section']").addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("contact-section").scrollIntoView({ behavior: 'smooth' });
  });
});