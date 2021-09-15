const menublock = document.querySelector(".menu");
const changeColorButton = document.getElementById("toggleScript");
const togglemenuBtn = function () {
    const displayMenu = document.querySelector(".menu");
    displayMenu.classList.toggle("menu__toggle");
};

const menuUitklappen = function () {
    changeColorButton.addEventListener("click", function () {
        togglemenuBtn();
    });
};
// https://www.geeksforgeeks.org/toggle-class-by-adding-the-class-name-when-element-is-clicked-and-remove-when-clicked-outside/
const html = document.querySelector("html");
html.addEventListener("click", function (e) {
    if (e.target !== changeColorButton)
        menublock.classList.remove("menu__toggle");
});

menuUitklappen();

const bodyselect = document.querySelector(".mainbody");
const witteListitem = document.querySelector(".menu__colored--wit");
const rodeListitem = document.querySelector(".menu__colored--rood");
const blauweListitem = document.querySelector(".menu__colored--blauw");
const groeneListitem = document.querySelector(".menu__colored--groen");
const oranjeListitem = document.querySelector(".menu__colored--oranje");
const grijzeListitem = document.querySelector(".menu__colored--grijs");

const maakBodyWit = function () {
    bodyselect.classList.add("menu__colored--wit");
    bodyselect.classList.remove("menu__colored--blauw");
    bodyselect.classList.remove("menu__colored--groen");
    bodyselect.classList.remove("menu__colored--oranje");
    bodyselect.classList.remove("menu__colored--grijs");
    bodyselect.classList.remove("menu__colored--rood");
};
witteListitem.addEventListener("click", maakBodyWit);

const maakBodyRood = function () {
    bodyselect.classList.remove("menu__colored--blauw");
    bodyselect.classList.remove("menu__colored--groen");
    bodyselect.classList.remove("menu__colored--oranje");
    bodyselect.classList.remove("menu__colored--grijs");
    bodyselect.classList.add("menu__colored--rood");
};
rodeListitem.addEventListener("click", maakBodyRood);

const maakBodyblauw = function () {
    bodyselect.classList.add("menu__colored--blauw");
    bodyselect.classList.remove("menu__colored--groen");
    bodyselect.classList.remove("menu__colored--oranje");
    bodyselect.classList.remove("menu__colored--grijs");
    bodyselect.classList.remove("menu__colored--rood");
};
blauweListitem.addEventListener("click", maakBodyblauw);

const maakBodygroen = function () {
    bodyselect.classList.remove("menu__colored--blauw");
    bodyselect.classList.add("menu__colored--groen");
    bodyselect.classList.remove("menu__colored--oranje");
    bodyselect.classList.remove("menu__colored--grijs");
    bodyselect.classList.remove("menu__colored--rood");
};
groeneListitem.addEventListener("click", maakBodygroen);

const maakBodyoranje = function () {
    bodyselect.classList.remove("menu__colored--blauw");
    bodyselect.classList.remove("menu__colored--groen");
    bodyselect.classList.add("menu__colored--oranje");
    bodyselect.classList.remove("menu__colored--grijs");
    bodyselect.classList.remove("menu__colored--rood");
};
oranjeListitem.addEventListener("click", maakBodyoranje);

const maakBodygrijs = function () {
    bodyselect.classList.remove("menu__colored--blauw");
    bodyselect.classList.remove("menu__colored--groen");
    bodyselect.classList.remove("menu__colored--oranje");
    bodyselect.classList.add("menu__colored--grijs");
    bodyselect.classList.remove("menu__colored--rood");
};
grijzeListitem.addEventListener("click", maakBodygrijs);