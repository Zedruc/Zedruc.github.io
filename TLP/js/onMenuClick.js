let aboutButton = document.getElementById("list-menu-about");
let joinButton = document.getElementById("list-menu-join");
let contactButton = document.getElementById("list-menu-contact");
let serverButton = document.getElementById("list-menu-server");

aboutButton.addEventListener('click', () => {
    if (document.location.pathname === "/TLP/mobile/320px/about.html")
        return document.getElementById("close-pullup-menu").click();
    document.location.pathname = "/TLP/mobile/320px/about.html";
});

joinButton.addEventListener('click', () => {
    swal("Oops!", "there's no invite link :\(", {
        className: "alert"
    });
});

contactButton.addEventListener('click', () => {
    swal("Hey!", "To get in touch add Nofu#4100 on Discord! :)", {
        className: 'alert'
    })
});

serverButton.addEventListener('click', () => {
    if (document.location.pathname === "/TLP/mobile/320px/index.html")
        return document.getElementById("close-pullup-menu").click();
    else
        document.location.pathname = "/TLP/mobile/320px/index.html"
});