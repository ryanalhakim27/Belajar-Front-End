const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {
    nav.classList.toggle("slide");
});

const cek = document.querySelector("input");

const tombol = document.querySelectorAll(".navigasi li");
tombol.forEach((a) => {
    a.addEventListener("click", function() {
        nav.classList.toggle("slide");
        cek.checked = false;
    });
});