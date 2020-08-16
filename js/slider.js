$(document).ready(function(){

    let slider = $('#slider');
    let btnAnterior = $('#btnAnterior');
    let btnSiguiente = $('#btnSiguiente');

    $('#slider .slide:last').insertBefore('#slider .slide:first');

    slider.css('margin-left', '-43%');


    function moverDerecha() {
        slider.animate({
            marginLeft: '-105.6%'
        }, 700, function(){
            $('#slider .slide:first').insertAfter('#slider .slide:last');
            slider.css('margin-left', '-43%');
        });
    }

    btnSiguiente.on('click', moverDerecha);

    function moverIzquierda() {
        $('#slider .slide:last').insertBefore('#slider .slide:first');
        slider.css('margin-left', '-105.6%');
        slider.animate({
            marginLeft: '-43%'
        }, 700);
    }

    btnAnterior.on('click', moverIzquierda);
});