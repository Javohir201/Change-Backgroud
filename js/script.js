let btns = document.querySelectorAll(".btn");
let navbar = document.querySelector(".navbar");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        navbar.style.background = btn.getAttribute("data-color");
    });
});