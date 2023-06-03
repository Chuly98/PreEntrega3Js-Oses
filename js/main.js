const productos = [
    {
        id: 1,
        nombre: "Lavarropas Carga Frontal Inverter 10 Kg Gris Drean",
        precio: 311.642,
        stock: 9,
        urlImg: "../img/Lavarropas-Drean-NEXT10.12WCRG.ECO-1.jpg"
    },
    {
        id: 2,
        nombre: "Lavarropas Carga Frontal Inverter 8 Kg Blanco Drean",
        precio: 219.386,
        stock: 10,
        urlImg: "../img/Lavarropas-Drean-NEXT8.14P.ECO-1.jpg"
    },
    {
        id: 3,
        nombre: "Lavarropas Carga Frontal 7 Kg Blanco Drean",
        precio: 174.188,
        stock: 5,
        urlImg: "../img/Lavarropas-Drean-NEXT7.10.ECO-1.jpg"
    },
    {
        id: 4,
        nombre: "Lavarropas Carga Frontal 6 Kg Blanco Drean",
        precio: 157.541,
        stock: 8,
        urlImg: "../img/Lavarropas-Drean-NEXT6.08.ECO-1.jpg"
    },
    {
        id: 5,
        nombre: "Lavarropas Carga Superior 8 Kg Blanco Drean",
        precio: 219.479,
        stock: 7,
        urlImg: "../img/Lavarropas-Drean-GOLD10.8.ECO-1.jpg"
    },
    {
        id: 6,
        nombre: "Lavarropas Carga Superior 6 Kg Blanco Drean",
        precio: 208.977,
        stock: 11,
        urlImg: "../img/Lavarropas-Drean-GOLD10.6.ECO-1.jpg"
    }
]

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []

const verProducto = ({ id, nombre, precio, stock, urlImg }) => {
    const contenedorTarjetas = document.querySelector("#contenedorTarjetas")
    const tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = `
                        <img src="${urlImg}" alt="">
                        <div class="contenido">
                            <h3>${nombre}</h3>
                        </div>
                        <span><b>Precio:</b> ${precio}$</span>
                        <form id="formCarrito${id}">
                        <input name="id" type="hidden" value="${id}">
                        <input name="cantidad" type="number" value="1" min="1" max="${stock}">
                        <button type="submit">Agregar al carrito</button>
                        </form>
                        
    `
    contenedorTarjetas.append(tarjeta)
}

const agregarCarrito = (id) => {
    const formCarrito = document.querySelector("#formCarrito" + id)
    formCarrito.addEventListener("submit", (e) => {
        e.preventDefault()
        const cantidad = e.target.children["cantidad"].value
        carrito.push({
            id,
            cantidad
        })
        localStorage.setItem("carrito", JSON.stringify(carrito))
    })
}
const verProductos = () => {

    productos.forEach(producto => {
        if (producto.stock != 0) {
            verProducto(producto)
            agregarCarrito(producto.id)
        }

    })
}

verProductos()