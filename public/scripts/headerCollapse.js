document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".collapsible-header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add("collapsed");
        } else {
            header.classList.remove("collapsed");
        }
        lastScrollY = window.scrollY;
    });
});