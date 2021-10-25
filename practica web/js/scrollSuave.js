$(document).ready(function () {
    $('a.volver-arriba').on('click', function(e){
        e.preventDefault();

        if($(window).scrollTop() != 0){
            $('html, body').stop().animate({scrollTop: 0}, 1000)
        }
    })

    //Movimiento suave a los demas elementos

        $('a.scroll-suave').on('click', function(e){
        e.preventDefault();
        
        let apache = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({scrollTop: apache}, 1000)
    })

    $('a.tecnico').on('click', function(e) {
        e.preventDefault()

        let apache = $($(this).attr('href')).offset().top - 120
        $('html, body').stop().animate({scrollTop: apache}, 2000)

    })

    $('a.contacto').on('click', function(e){
        e.preventDefault();

        let apache = $($(this).attr('href')).offset().top - 68
        $('html, body').stop().animate({scrollTop: apache}, 2000)
    })

    //modal

    $('.menu-modal a').on('click', function(e) {
    
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('.modal-container, .modal').animate({
                scrollTop: $(hash).offset().top - 900
            }, 2000)
        }
    })
})