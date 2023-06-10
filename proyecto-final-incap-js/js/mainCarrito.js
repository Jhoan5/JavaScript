// PRODUCTOS
const productos = [
    // Gasesosas
    {
        id: "gaseosa-01",
        titulo: "Glacial",
        imagen: "../img/gas1.jpg",
        categoria: {
            nombre: "Gaseosas",
            id: "gaseosas"
        },
        precio: 3000
    },
    {
        id: "gaseosa-02",
        titulo: "Pony",
        imagen: "../img/gas2.jpg",
        categoria: {
            nombre: "Gaseosas",
            id: "gaseosas"
        },
        precio: 3500
    },
    {
        id: "gaseosa-03",
        titulo: "Canada dry",
        imagen: "../img/gas3.jpg",
        categoria: {
            nombre: "Gaseosas",
            id: "gaseosas"
        },
        precio: 2000
    },
    {
        id: "gaseosa-04",
        titulo: "Kola",
        imagen: "../img/gas4.jpg",
        categoria: {
            nombre: "Gaseosas",
            id: "gaseosas"
        },
        precio: 4000
    },
    {
        id: "gaseosa-05",
        titulo: "Canada extra",
        imagen: "../img/gas5.jpg",
        categoria: {
            nombre: "Gaseosas",
            id: "gaseosas"
        },
        precio: 5500
    },
    //Hamburguesas
    {
        id: "hamburguesa-01",
        titulo: "Clasica",
        imagen: "../img/h1.jpg",
        categoria: {
            nombre: "Hamburguesa",
            id: "hamburguesa"
        },
        precio: 10000
    },
    {
        id: "hamburguesa-02",
        titulo: "Mini",
        imagen: "../img/h2.jpg",
        categoria: {
            nombre: "Hamburguesa",
            id: "hamburguesa"
        },
        precio: 13500
    },
    {
        id: "hamburguesa-03",
        titulo: "Acompañada",
        imagen: "../img/h3.jpg",
        categoria: {
            nombre: "Hamburguesa",
            id: "hamburguesa"
        },
        precio: 18000
    },
    {
        id: "hamburguesa-04",
        titulo: "Italiana",
        imagen: "../img/h4.jpg",
        categoria: {
            nombre: "Hamburguesa",
            id: "hamburguesa"
        },
        precio: 11500
    },
    {
        id: "hamburguesa-05",
        titulo: "Francesa",
        imagen: "../img/h5.jpg",
        categoria: {
            nombre: "Hamburguesa",
            id: "hamburguesa"
        },
        precio: 14500
    },
    //Perro
    {
        id: "perro-01",
        titulo: "Tacto especial",
        imagen: "../img/p1.jpg",
        categoria: {
            nombre: "Perro",
            id: "perro"
        },
        precio: 12000
    },
    {
        id: "perro-02",
        titulo: "El español",
        imagen: "../img/p2.jpg",
        categoria: {
            nombre: "Perro",
            id: "perro"
        },
        precio: 9000
    },
    {
        id: "perro-03",
        titulo: "Casero",
        imagen: "../img/p3.jpg",
        categoria: {
            nombre: "Perro",
            id: "perro"
        },
        precio: 7000
    },
    {
        id: "perro-04",
        titulo: "Simple",
        imagen: "../img/p4.jpg",
        categoria: {
            nombre: "Perro",
            id: "perro"
        },
        precio: 18000
    },
    {
        id: "perro-05",
        titulo: "Extra queso",
        imagen: "../img/p5.jpg",
        categoria: {
            nombre: "Perro",
            id: "perro"
        },
        precio: 6000
    },
    //Pizza
    {
        id: "pizza-01",
        titulo: "Pizza de relleno",
        imagen: "../img/pi1.jpg",
        categoria: {
            nombre: "Pizza",
            id: "pizza"
        },
        precio: 25000
    },
    {
        id: "pizza-02",
        titulo: "Napolitana",
        imagen: "../img/pi2.jpg",
        categoria: {
            nombre: "Pizza",
            id: "pizza"
        },
        precio: 28000
    },
    {
        id: "pizza-03",
        titulo: "Alemana",
        imagen: "../img/pi3.jpg",
        categoria: {
            nombre: "Pizza",
            id: "pizza"
        },
        precio: 22000
    },
    {
        id: "pizza-04",
        titulo: "Nuevo mundo",
        imagen: "../img/pi4.jpg",
        categoria: {
            nombre: "Pizza",
            id: "pizza"
        },
        precio: 19000
    },
    {
        id: "pizza-05",
        titulo: "Europea",
        imagen: "../img/pi5.jpg",
        categoria: {
            nombre: "Pizza",
            id: "pizza"
        },
        precio: 21500
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}