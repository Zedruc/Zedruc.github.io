let aboutButton = document.getElementById("list-menu-about");
let joinButton = document.getElementById("list-menu-join");
let contactButton = document.getElementById("list-menu-contact");
let serverButton = document.getElementById("list-menu-server");

aboutButton.addEventListener('click', () => {
    if (document.location.pathname === "/TLP/mobile/320px/about.html")
        return document.getElementById("close-pullup-menu").click();

    if (document.location.pathname.indexOf("720px") != -1)
        return document.location.pathname = "/TLP/mobile/720px/about.html";

    if (document.location.pathname.indexOf("320px") != -1)
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
    if (document.location.pathname === "/TLP/mobile/320px/index.html" || document.location.pathname === "/TLP/mobile/720px/index.html")
        return document.getElementById("close-pullup-menu").click();
    else
        document.location.pathname = "/TLP/mobile/320px/index.html"
});