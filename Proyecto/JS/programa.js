import { arrayDeProductos } from "./productos.js"
import { renderizarEnCarrito } from './carrito.js'
let articuloCesta = {}
let carrito = []


const divContainer = document.getElementById('div_container')
const h1Dinamic = document.getElementById('dinamic_title')
const pDescription = document.getElementById('description')
const dropDownBox = document.getElementById('dropDown_box')
const menuIcon = document.getElementById('menu_icon')
const closeIcon = document.getElementById('close_icon')
const divMenu = document.getElementById('div_menu')
const dinamicSection = document.getElementById('dinamic_section')
const body = document.getElementById('body')
/* btns */
const btnEventos = document.getElementById('btn_eventos')

/* función de filtrado */
const filterFunction = (e) => {
        const liTextContent = e.target.textContent
        return arrayDeProductos.filter((obj) => obj.name === liTextContent)
}

/* función de renderizado de los productos de las opciones del ul del main */
const renderizadoLiMain = (e) => {
        divContainer.innerHTML = ''
        h1Dinamic.textContent = e.target.textContent
        const filterArray = filterFunction(e)

        filterArray.forEach((objectChild) => {
                pDescription.textContent = objectChild.text
                objectChild.tipos.forEach((eventsType) => {
                        const caja = document.createElement('div')
                        caja.className = 'caja'
                        caja.id = `caja_${eventsType.id}`
                        caja.innerHTML = `
                   
                        <figure class='figure_render'>
                                <img src='${eventsType.img}'>
                        </figure>
                        <div class='div_description'>
                                <div><h2>${eventsType.name}</h2></div>
                                <div><p class='description_p'>${eventsType.description}</p></div>
                                <div><button class='btn_ver_productos' id='${eventsType.id}'>Ver productos</button></div>
                        </div>
                `
                        divContainer.append(caja)
                })
        })
}

/* función renderizado de  los productos de cada caja del renderizado de arriba */
const renderizadoProducto = (array, target) => {

        for (let i = 0; i < array.length; i++) {
                let object = array[i]

                if (object.id == target) {
                        articuloCesta.img = object.img
                        divContainer.innerHTML = ''
                        h1Dinamic.textContent = `${object.name}`
                        pDescription.textContent = ''
                        divContainer.innerHTML = `
                                <figure class='dinamic_product_figure'>
                                        <img src='${object.img}'>
                                </figure>
                                <form id='dinamic_product_section'>
                                        <h3>Escoge el tamaño de tu cesta:</h3>
                                        <div class='dinamic_container_product1'></div>
                                        <div class='main_container_color' >
                                                <h3>Elige el color de tus <span class='category'>${object.category}</span></h3>
                                            <div class='container_color'>
                                                <div class='input_color'>
                                                        <input type='radio' disabled id='blanco' data-id='1' name='input_color' class='color_input' required>
                                                        <label for='blanco'>Blanco</label>
                                                </div>
                                                <div class='input_color'>
                                                        <input type='radio' disabled id='rosa' data-id='2' name='input_color' class='color_input' required>
                                                        <label for='rosa'>Rosa</label>
                                                </div>
                                                <div class='input_color'>
                                                        <input type='radio' disabled id='rojo' data-id='3' name='input_color' class='color_input' required>
                                                        <label for='rojo'>Rojo</label>
                                                </div>
                                                <div class='input_color'>
                                                        <input type='radio' disabled id='amarillo' data-id='4' name='input_color' class='color_input' required>
                                                        <label for='amarillo'>Amarillo</label>
                                                </div>
                                                <div class='input_color'>
                                                        <input type='radio' disabled id='naranja' data-id='5' name='input_color' class='color_input' required>
                                                        <label for='naranja'>Naranja</label>
                                                </div>
                                              </div>
                                                <div class='cantidad_flores'>
                                                        <h5>Para tu cesta grande cuántas flores quieres</h5>
                                                        <input type='number' disabled max='28' min='15' class='input_cantidad'>
                                                </div>
                                                <button type='submit' class='btn_anadir_carrito' disabled >Añadir al carrito</button>
                                               </div>
                                </form>
                        `
                        /* BOTÓN AÑADIR AL CARRITO */
                        const formDinamicProductSection = document.getElementById('dinamic_product_section')
                        const inputCantidad = formDinamicProductSection.querySelector('.input_cantidad')
                        formDinamicProductSection.addEventListener('submit', function (e) {
                                e.preventDefault()
                                /* para validar si el formulario se llenó correctamente, si=true, no=false  */
                                if (this.checkValidity()) {
                                        carrito.push(articuloCesta)
                                        articuloCesta.id = articuloCesta.id + inputCantidad.value
                                        articuloCesta.cantidadCesta = 1
                                        if(articuloCesta.tamanoCesta === 'Cesta pequeña'){
                                                articuloCesta.cantidadFlores = 10
                                               console.log(carrito)
                                        }else{
                                                articuloCesta.cantidadFlores = Number(inputCantidad.value)
                                                console.log(carrito)
                                        }
                                        console.log(carrito)
                                        renderizarEnCarrito(carrito)
                                } else {
                                        alert('Rellene bien los campos')
                                }
                        })
                        const dinamicContainerProduct1 = divContainer.querySelector('.dinamic_container_product1')
                        object.precios.forEach((item) => {

                                const cajaProducto = document.createElement('div')
                                cajaProducto.className = 'caja_producto_dinamico'
                                cajaProducto.innerHTML = `
                                <input type='radio' name='input_cesta' id='${item.id}' class='input_producto_precio' required>
                                <label for='${item.id}' >
                                         <h5>${item.name}</h5>
                                         <p class='p_description_product'>${item.description}</p>
                                         <p class='price'>${item.precio.toFixed(2)} €</p>
                                </label>
                                `
                                dinamicContainerProduct1.append(cajaProducto)
                        })
                }
                if (object.tipos) {
                        const found = renderizadoProducto(object.tipos, target)
                        if (found) {
                                return found
                        }
                }

        }


}

/* Delegación de eventos con id */
body.addEventListener('click', (e) => {
        const target = e.target

        switch (target.id) {
                case 'btn_eventos':
                case 'btn_cestas':
                case 'btn_eventos':
                case 'btn_ramos':
                        renderizadoLiMain(e)
                        break;
                default:
                        break;
        }
})

/* delegación de eventos con clase */
dinamicSection.addEventListener('click', (e) => {
        const target = e.target

        switch (target.className) {
                case 'btn_ver_productos':
                        renderizadoProducto(arrayDeProductos, Number(target.id))
                        break;
                case 'input_producto_precio':
                        (() => {
                                /* tamaños cestas contenedor padre */
                                const mainContainer = target.parentNode
                                const inputId = mainContainer.querySelector('input').id
                                const price = mainContainer.querySelector('.price').textContent
                                articuloCesta.price = parseFloat(price) 
                                const h5Caja = mainContainer.querySelector('h5').textContent
                                articuloCesta.tamanoCesta = h5Caja
                                articuloCesta.id = inputId  
                                /* colores y añadir valores a articuloCesta */
                                const colorContainer = document.querySelector('.main_container_color')
                                const divCantidad = colorContainer.querySelector('.cantidad_flores')
                                const inputCantidad = colorContainer.querySelector('.input_cantidad')
                                const btnAnadirCesta = colorContainer.querySelector('.btn_anadir_carrito')
                                btnAnadirCesta.disabled = false
                                if (h5Caja === 'Cesta grande') {
                                        divCantidad.style.opacity = 1
                                        inputCantidad.disabled = false
                                } else {
                                        divCantidad.style.opacity = 0.5
                                        inputCantidad.disabled = true
                                }
                                colorContainer.style.opacity = 1
                                const flowerName = colorContainer.querySelector('.category').textContent
                                articuloCesta.name = flowerName
                                const nodeListInputsColor = colorContainer.querySelectorAll('.color_input')
                                const arrayInputsColor = Array.from(nodeListInputsColor)
                                arrayInputsColor.forEach(input => input.disabled = false)
                                
                        })(target)
                        break;

                case 'color_input':
                        (() => {
                                articuloCesta.flowerColor = target.id
                                articuloCesta.id = articuloCesta.id + target.dataset.id
                        })(target)
                        break;

                default:
                        break;
        }
})


menuIcon.addEventListener('click', () => {
        menuIcon.style.display = 'none'
        menuIcon.style.background = 'background-color: var(--darkBrown-color);'
        dropDownBox.style.display = 'block'
        closeIcon.style.display = 'block'
        divMenu.classList.toggle('decoration')
})
closeIcon.addEventListener('click', () => {
        menuIcon.style.display = 'block'
        dropDownBox.style.display = 'none'
        closeIcon.style.display = 'none'
        divMenu.classList.toggle('decoration')
})






/* CARRITO CARRITO CARRITO CARRITO */