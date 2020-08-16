$(document).ready(function(){

    let slider = $('#slider');
    let btnAnterior = $('#btnAnterior');
    let btnSiguiente = $('#btnSiguiente');

    $('#slider .slide:last').insertBefore('#slider .slide:first');

    slider.css('margin-left', '-43%');

    
});