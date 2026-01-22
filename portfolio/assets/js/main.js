"use strict";

/*
  this is my main.js take a look 
  ----------
  Purpose:
  -  i only did Small UI enhancements only
  - No framework, no unnecessary logic yet 
*/

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
});

/* = MY ACTIVE NAV LINK = */
function highlightActiveNav() {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && currentPage === "")) {
      link.classList.add("active");
    }
  });
}

/* = OPTIONAL: MY SAFE EXTERNAL LINKS = */
const externalLinks = document.querySelectorAll('a[target="_blank"]');

externalLinks.forEach(link => {
  link.setAttribute("rel", "noopener noreferrer");
});