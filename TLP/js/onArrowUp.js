let arrow = document.getElementById("up-arrow");
let menu = document.getElementById("discord-pullup");
let listMenu = document.getElementById("list-menu");
let closeMenuButton = document.getElementById("close-pullup-menu");
arrow.addEventListener('click', () => {
    (menu.classList.contains("open")) ?
        menu.classList.remove("open") : menu.classList.add("open");

    (arrow.classList.contains("hidden")) ?
        arrow.classList.remove("hidden") : arrow.classList.add("hidden");

    setTimeout(() => {
        (closeMenuButton.classList.contains("hidden")) ?
            closeMenuButton.classList.remove("hidden") : closeMenuButton.classList.add("hidden");
        (listMenu.classList.contains("hidden")) ?
            listMenu.classList.remove("hidden") : listMenu.classList.add("hidden");
    }, 1000);
});