window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
function bookNow(service) {
    window.location.href = "book-now.html?service=" + encodeURIComponent(service);
}

