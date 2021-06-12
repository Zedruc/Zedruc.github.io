function redirect(target) {
    localStorage.setItem('last_page', window.location.pathname);
    window.location.pathname = target;
}