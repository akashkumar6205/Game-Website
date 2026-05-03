'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarlinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function (){
    console.log("clicked");
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarlinks.length;i++){
    navbarlinks[i].addEventListener("click", function () {
        navbar.classList.remove("active");
        navbarToggler.classList.remove("active");
    });
}

/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for(let i = 0; i < searchTogglers.length; i++){
    searchTogglers[i].addEventListener("click", function () {
        searchBox.classList.toggle("active");
    });
}

/**
 * header
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if(window.scrollY >= 200) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});