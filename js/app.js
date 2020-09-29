//Sticky menu
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Humb menu
function toggleClass() {
    let menu = document.querySelector(".mainMenu");
    menu.classList.toggle("toggleCls");
}
let hamburger = document.querySelector(".hamIcon");
hamburger.addEventListener("click", toggleClass);



//Works Gallery
let galleryImages = document.querySelectorAll(".box");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
    galleryImages.forEach(function (image) {
        image.onclick = function () {
            let getElementCss = window.getComputedStyle();
        }
    });
}