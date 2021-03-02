let closeButton = document.getElementById("close-pullup-menu");

closeButton.addEventListener('click', () => {
    (menu.classList.contains("open")) ?
        menu.classList.remove("open") : menu.classList.add("open");

    (arrow.classList.contains("hidden")) ?
        arrow.classList.remove("hidden") : arrow.classList.add("hidden");

    (closeMenuButton.classList.contains("hidden")) ?
        closeMenuButton.classList.remove("hidden") : closeMenuButton.classList.add("hidden");

    (listMenu.classList.contains("hidden")) ?
        listMenu.classList.remove("hidden") : listMenu.classList.add("hidden");
});