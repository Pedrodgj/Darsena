let mostrar = document.querySelector('.mostrar')
const errorProductos = document.querySelector('#errorProducto')

const API_URL = 'http://localhost:8010/api'

const cargarImagenes = async() => {

    try {
        
        const respuesta = await fetch(`${API_URL}/productos`)
    
        const data = await respuesta.json();
        
        let productos = '';

        data.productos.forEach( producto => productos +=`

        <div class="card">
            <img src="${producto.imagen}" alt="" width="300" height="220">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <h4>${producto.tipo}</h4>
        </div>

        `)

        mostrar.innerHTML = productos;
        errorProductos.style.className = 'errorProductos'

        console.log(data)

    } catch (error) {
        console.log(error)
    }

}

cargarImagenes()

