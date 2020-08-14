$(document).ready(function () {

    //Mostrar y ocultar botón "volver arriba"

    let btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll', function () {

        var proyectosOffsetTop = $('#viajes').offset().top;

        if ($(window).scrollTop() >= proyectosOffsetTop) {

            btnVolverArriba.css('margin-right', 0);
        } else if ($(window).scrollTop() <= proyectosOffsetTop/2) {

            btnVolverArriba.css('margin-right', '-60px');
        }
    })

    // Movimiento suave de scroll de "inicio" y "volver arriba"

    $('a.volver-arriba').on('click', function (e) {
        e.preventDefault();

        if ($(window).scrollTop() !=0) {
            $('html, body').animate({scrollTop: 0}, 1000);
        }

    })
});