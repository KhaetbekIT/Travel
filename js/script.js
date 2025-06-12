// document.querySelector(".header__burger").addEventListener("click", function() {
//     this.classList.toggle("active");
//     document.querySelector(".header__nav").classList.toggle("open");
//   });

// DOM -> Document Object Model
// BOM -> Browser Object Model

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
    // BOM selectors
    const burgerMenu = document.querySelector("#js-menu");
    const showOverlay = document.getElementById("js-mobile-menu");
    const allMobileNavLinks = document.querySelectorAll(
        "#js-mobile-menu-item a"
    );

    // DOM events
    burgerMenu.addEventListener("click", () => {
        showOverlay.classList.toggle("active");
    });

    showOverlay.addEventListener("click", (e) => {
        const datasetTarget = e.target.dataset.overlay;

        if (datasetTarget === "show") {
            showOverlay.classList.remove("active");
        }
    });

    window.addEventListener("resize", () => {
        showOverlay.classList.remove("active");
    });

    for (const link of allMobileNavLinks) {
        link.addEventListener("click", () => {
            showOverlay.classList.remove("active");
        });
    }
});
