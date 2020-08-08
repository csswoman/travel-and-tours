$(document).ready(function () {

    var banner = $('#banner')

    //Definir altura dinámica para el banner
    function alturaBanner() {

        var viewportAltura = $(window).height();
        banner.css('height', viewportAltura);
    }
    alturaBanner();

    $(window).resize(alturaBanner);
});