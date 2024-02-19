window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var service = urlParams.get('service');
    if (service) {
        document.getElementById('service').value = service;
    }
}
