const expr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

$(document).ready(function (){

    $('#enviar').click(function (e) {
        //e.preventDefault()

        let nombre = $('#nombre').val();
        let correo = $('#email').val();
        let mensaje = $('#mensaje').val();
        let formulario = $('#formulario');

        if( nombre == '' || correo == '' || !expr.test(correo) || mensaje == '') {
           $('.error').fadeIn()
           return false;
        } else {
            $('.error').fadeOut();
            formulario.submit();
            setTimeout(() => {
                formulario.html('El formulario ha sido enviado con Exito');
            }, 3000);
        }

    })
})