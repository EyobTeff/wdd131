// Update copyright year and last modified date
const lastModifiedElement = document.getElementById("last-modified");
document.getElementById("last-modified").textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle the menu visibility when the hamburger is clicked
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
