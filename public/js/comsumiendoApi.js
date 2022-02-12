let mostrar = document.querySelector('.mostrar')
let menu = document.querySelectorAll('.mini');

const errorProductos = document.querySelector('#errorProducto')

const API_URL = 'http://localhost:8010/api'

let valor = menu.forEach( e => e.addEventListener('click', (e) => {
    //e.preventDefault();
    let nombreEtiqueta = e.target.firstChild.data
    
    switch (nombreEtiqueta) {
        case 'TELEFONIA':
            cargarImagenes(nombreEtiqueta)
            break;
        
        case 'ACCESORIOS':
            cargarImagenes(nombreEtiqueta)
            break;
    
        case 'ELECTRODOMESTICOS':
            cargarImagenes(nombreEtiqueta)
            break;
              
        case 'COMPUTACION':
        cargarImagenes(nombreEtiqueta)
        break;
    
        default:
            cargarImagenes()
            break;
    }
        
}));

const cargarImagenes = async(tipo = '') => {

    try {
        
        const respuesta = await fetch(`${API_URL}/productos`)
    
        const data = await respuesta.json();
        
        let productos = '';

        data.productosAleatorios.forEach( producto => {
        
            if(producto.tipo === tipo) {
                
                productos +=`
                    <div class="card">
                        <img src="${producto.imagen}" alt="" width="300" height="220">
                        <h2>${producto.nombre}</h2>
                        <p>${producto.descripcion}</p>
                        <h4>${producto.tipo}</h4>
                    </div>
            `
            }
        })
        
        mostrar.innerHTML = productos;
        errorProductos.style.className = 'errorProductos'

    } catch (error) {
        console.log(error)
    }

}

cargarImagenes()

