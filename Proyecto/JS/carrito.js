const total = (precio,pTotal,inputCantidad)=>{
    const total = Number(inputCantidad.value) * precio
    pTotal.textContent = `${total.toFixed(2)} €`
}


const formCarrito = document.getElementById('form_cesta')
export const renderizarEnCarrito = (carrito)=>{
    formCarrito.innerHTML =''
    carrito.forEach((articulo)=>{
        const cajaArticulo= document.createElement('div')
        cajaArticulo.className = 'caja_articulo'
        cajaArticulo.innerHTML =`
            <div class='caja_description'>
                <h3>${articulo.tamanoCesta}</h3>
                <img src='${articulo.img}'>
                <p>${articulo.name} de color : ${articulo.flowerColor}</p>
            </div>
            <div class='caja_cantidad'>
                <i class="fa-solid fa-plus icon_plus" ></i>
                <input type='text' value='1' class='input_cantidad' disabled>
                <i class="fa-solid fa-minus icon_minus" ></i>
            </div>
            <div class='caja_precio_total'>
                 <div>
                    <h4>Precio:</h4>
                    <p>${articulo.price.toFixed(2)}€</p>
                 </div>
                 <div>
                    <h4>Total:</h4>
                    <p class='total'>${articulo.price.toFixed(2)}€</p>
                 </div>
                 <div>
                    <i class="fa-solid fa-trash delete"></i>
                 <div>
            </div>   
        `
        formCarrito.append(cajaArticulo)

        const iconPlus = cajaArticulo.querySelector('.icon_plus')
        const iconMinus = cajaArticulo.querySelector('.icon_minus')
        const iconDelete = cajaArticulo.querySelector('.delete')
        const inputCantidad = cajaArticulo.querySelector('.input_cantidad')
        const pTotal = cajaArticulo.querySelector('.total')

        iconPlus.addEventListener('click',()=>{
            inputCantidad.value = Number(inputCantidad.value) + 1
            total(articulo.price,pTotal,inputCantidad)
        })
        iconMinus.addEventListener('click',()=>{
            if(inputCantidad.value === '0')return
            inputCantidad.value = Number(inputCantidad.value) - 1
            total(articulo.price,pTotal,inputCantidad)
        })
        iconDelete.addEventListener('click',()=>{
            carrito = carrito
        })
    })

}
