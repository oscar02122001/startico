const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    body.classList.toggle("freez");
    // nav.classList.toggle("active")
    if (!nav.classList.contains("active")) {
        nav.classList.add("active")
    } else if (!nav.classList.contains("pasive")) {
        nav.classList.add("pasive");
    }
})

nav.addEventListener("animationend", function (evt) {
    if (evt.animationName === "wrap-closing") {
        nav.classList.remove("active");
        nav.classList.remove("pasive")
    }
})