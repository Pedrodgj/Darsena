$(document).ready(function() {
    
    let fixedHeader = $('#fixedHeader');

    $(window).on('scroll', function() {
        
        let proyectosOffsetTop = $('#quien').offset().top;

        let scroleo = $(window).scrollTop();

        if(scroleo >= proyectosOffsetTop) {
            fixedHeader.css('margin-top', 0);
        } else if (scroleo <= proyectosOffsetTop/2) {
            fixedHeader.css('margin-top', '-90px');
        }
    })
})