const contenedorProductos = document.getElementById('contenedor-productos');

// Lista de productos con sus propiedades
const productos = [
    {id: 1, nombre: "Dog Chow", precio: 650, img: 'img/dogChow.jpg'},
    {id: 2, nombre: "Pedigree", precio: 320, img: 'img/pedigree.jpg'},
    {id: 3, nombre: "Royal Canin", precio: 400, img: 'img/royalCanin.png'},
]

// En el array carrito se guardan los productos agregados al carrito
const carrito = [];



/*
La función mostrarProductos se encarga de mostrar o renderizar
los productos del array "productos" por pantalla y se ejecuta
al iniciar la aplicación.
*/
const mostrarProductos = () => {

    productos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <div class="prod-container">
                <img src="${producto.img}" />
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
                <button id="${producto.id}" class="agregar">Agregar al carrito</button>
            </div>
        `
    });
}


/*
Esta función es la que hace toda la magia. Mediante el objeto "e"
detecta si se hizo click en un elemento que en su lista de clases
contenga la clase "agregar", dicho de otra forma, detecta si se hizo
click en algún botón Agregar al carrito y de ser el caso identifica su id
el cual se corresponde con el id del producto, por lo tanto mediante su id
lo buscamos en el array producto y lo agregamos al array carrito. De esta
forma en el carrito estamos agregando el objeto completo para luego a la hora
de mostrarlo tener disponibles todas sus propiedades.
*/
const agregarAlCarrito = e => {
    if (e.target.classList.contains('agregar')) {
        const id = e.target.id;
        const producto = productos.find(producto => producto.id == id);
        carrito.push(producto);
        mostrarCarrito();
    }
}





/*
Esta función hace lo mismo que mostrarProductos sólo que con el array "carrito",
además el html que genera es un poco distinto.
*/
const mostrarCarrito = () => {
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    contenedorCarrito.innerHTML = '<h2>Carrito:</h2>';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <p>${producto.nombre} \t ${producto.precio}</p>
        `
    });
}


/*
El evento DOMContentLoaded se ejecuta al iniciar la aplicación,
y ejecuta la función mostrarProductos para que se vean por pantalla
*/
document.addEventListener('DOMContentLoaded', mostrarProductos);

/*
Le agregamos un listener a todo el contenedor donde están los productos,
lo que nos interesa es identificar cuando se haga click en alguno de los
botones de los productos.
*/
contenedorProductos.addEventListener('click', agregarAlCarrito);
contenedorProductos.addEventListener('click', borrarCarrito);


function agregar_producto (){

    let producto_usuario = document.getElementById("producto");
    let lista = document.getElementById("lista");

    let li = document.createElement("li");

    li.innerHTML = producto_usuario.value

    lista.append(li);
}

function quitar_producto (){

    let producto_usuario = document.getElementById("producto");
    let lista = document.getElementById("lista");

    let li = document.createElement("li");

    li.innerHTML = producto_usuario.value

    lista.remove(li);
}