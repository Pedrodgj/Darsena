$(document).ready(function () {

    //selecionar las variables

    let slider = $('#slider');
    let btnAnterior = $('#btnAnterior');
    let btnPosterior = $('#btnPosterior');

    //se pasa el ultimo slide al primer lugar
    $('#slider .slide:last').insertBefore($('#slider .slide:first'))

    //con margen negativo se vuelve a mostrar el primero
    slider.css('margin-left', '-50%');

    //funcion para que el slide se mueva a la derecha
    function moverDerecha (){

        if(!slider.is(':animated')){
            
            slider.animate({
                marginLeft: '-102%'
            }, 700, function(){
                $('#slider .slide:first').insertAfter('#slider .slide:last');
                slider.css('margin-left', '-40%')
                resetInterval();
            });
       
        }
    }

    btnPosterior.on('click', moverDerecha);

    //funcion para mover a la izquierda
    function moverIzquierda () {

        if(!slider.is(':animated')){
            
            $('#slider .slide:last').insertBefore('#slider .slide:first');
            slider.css('margin-left', '-102%');
            slider.animate({
                marginLeft: '-43%'
            }, 700, function (){
                resetInterval();
            })

        }
    }

    btnAnterior.on('click', moverIzquierda);

    //funcion para que el slide se mueva automaticamente
    let intervalo = setInterval(moverDerecha, 5000);

    function resetInterval (){
        clearInterval(intervalo);
        intervalo = setInterval(moverDerecha, 5000);
    }

    //slider.css('display', 'none')

});