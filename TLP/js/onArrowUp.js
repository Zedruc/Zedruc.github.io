let arrow = document.getElementById("up-arrow");
let menu = document.getElementById("discord-pullup");
arrow.addEventListener('click', () => {
    (menu.classList.contains("open")) ?
        menu.classList.remove("open") : menu.classList.add("open");

    (arrow.classList.contains("hidden")) ?
        arrow.classList.remove("hidden") : arrow.classList.add("hidden");

});