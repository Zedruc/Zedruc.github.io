let aboutButton = document.getElementById("list-menu-about");
let joinButton = document.getElementById("list-menu-join");
let contactButton = document.getElementById("list-menu-contact");
let serverButton = document.getElementById("list-menu-server");

aboutButton.addEventListener('click', () => {
    swal("Hey!", "the mobile about page doesnt exist yet :(", {
        className: "alert"
    });
});

joinButton.addEventListener('click', () => {
    swal("Oops!", "there's no invite link :\(", {
        className: "alert"
    });
});

contactButton.addEventListener('click', () => {
    swal("Hey!", "the contact page doesnt exist yet :(", {
        className: "alert"
    });
});

serverButton.addEventListener('click', () => {
    document.getElementById("close-pullup-menu").click();
});