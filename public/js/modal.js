let cerrar = document.querySelectorAll('.close')[0];
let abrir = document.querySelectorAll('.mini');
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];

abrir.forEach( e => e.addEventListener('click', (e) => {
    e.preventDefault();
    
    modal.classList.remove('modal-close')

    modalC.style.opacity = "1";
    modalC.style.visibility = 'visible';
} ) )

cerrar.addEventListener('click', () => {
    modal.classList.add('modal-close');
    
    setTimeout(() => {
        modalC.style.opacity = "0";
        modalC.style.visibility = 'hidden';
    }, 900);
})

window.addEventListener('click', (e) => {
    if(e.target == modalC) {
        modal.classList.toggle('modal-close');
    
        setTimeout(() => {
            modalC.style.opacity = "0";
            modalC.style.visibility = 'hidden';
        }, 900);
    }
})


