'use strict'
/**
 ** Add Event On Elements
  */
 const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}
/**
 ** Navbar Toggler
  */
 const navbar = document.querySelector("[data-navbar]");
 const navTogglers = document.querySelectorAll("[data-nav-toggler]");
 const navbarLinks = document.querySelectorAll("[data-nav-link]");
 const overlay = document.querySelectorAll("[data-overlay]");
 
 const togglerNavBar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
 }

 addEventOnElem(navTogglers, "click", togglerNavBar); 

 const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
 }

 addEventOnElem(navbarLinks, "clicks", closeNavbar);
 /**
  **  Header Show (when you scroll down to 100px)
   */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);