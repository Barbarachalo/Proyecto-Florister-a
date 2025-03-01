const formMainContainer = document.getElementById('form_main_container')
const userData = {}
let password

/* Delegación de eventos 'click' */
const loginContainer = document.getElementById('div_container_login')
const registerContainer = document.getElementById('div_container_register')
function translateY() {
    registerContainer.style.transform = 'translateX(calc(-100% - 60px))'
    loginContainer.style.transform = 'translateX(calc(-100% - 60px))'
}
function translateYback() {
    registerContainer.style.transform = 'translateX(0%)'
    loginContainer.style.transform = 'translateX(0%)'
}

formMainContainer.addEventListener('click', (e) => {

    const target = e.target.id
    switch (target) {
        case 'enlace_registro':
            translateY()
            break;
        case 'enlace_incio_sesion':
            translateYback()
            break;

        default:
            break;
    }
})
/* Expresiones Regulares */
const regexName = /^[a-zA-Z]+([-\s][a-zA-Z]+)*$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^[a-zA-Z0-9\W]{1,20}$/;
const regexTel = /^[0-9]{1,9}$/;

/* función estilos para datos correctos e incorrectos */
const rightStylesInputs = ( icon, input, errorMessage) => {
    errorMessage.classList.remove('styles_error_message')
    icon.classList.remove('styles_error_message')
    icon.classList.add('style_right_icon')
    input.classList.add('style_right_input')
}
const wrongStylesInputs = ( icon, input, errorMessage) => {
    errorMessage.classList.add('styles_error_message')
    icon.classList.add('styles_error_message')
    icon.classList.remove('style_right_icon')
    input.classList.remove('style_right_input')
}
const defaultStylesInputs = ( icon, input, errorMessage) => {
    icon.classList.remove('style_right_icon')
    input.classList.remove('style_right_input')
    errorMessage.classList.remove('styles_error_message')
    icon.classList.remove('styles_error_message')
}

/* función reutilizable */
const validInputFunction = (e, regex, icon, input, errorMessage) => {
    const target = e.target
    const targetId = e.target.id
    let targetValue = target.value

    if (regex.test(target.value)) {
        rightStylesInputs( icon, input, errorMessage)
        switch (targetId) {
            case 'input_full_name':
                userData.name = target.value
                target.dataset.boolean = 'true'
                break;
            case 'input_create_email':
                userData.email = target.value
                target.dataset.boolean = 'true'
                break;
            case 'input_tel':
                userData.phoneNumber = target.value
                target.dataset.boolean = 'true'
                break;
            case 'input_create_password':
                password = target.value
                target.dataset.boolean = 'true'
                break;
        }
       

    } else if (targetValue.trim() === '') {
        defaultStylesInputs( icon, input, errorMessage)
        target.dataset.boolean = 'false'
         
    } else {
        wrongStylesInputs( icon, input, errorMessage)
        target.dataset.boolean = 'false'
    }
}

const confirmPassword = (target, icon, input, errorMessage) => {
     
    if (password !== undefined && password === target.value) {
        userData.password = target.value
        rightStylesInputs( icon, input, errorMessage)
        target.dataset.boolean = 'true'
    } else {
        wrongStylesInputs( icon, input, errorMessage)
        
    }
}

/* comprobar datos guardados en localStorage */
const userDataValidation = (target, targetId, icon, input, errorMessage) => {
    const objectUserData = JSON.parse(localStorage.getItem('userData'))
    switch (targetId) {
        case 'input_email':
            if (objectUserData.email === target.value) {
                rightStylesInputs(icon,input,errorMessage)
                target.dataset.boolean = 'true'
            } else {
                wrongStylesInputs(icon,input,errorMessage)
                target.dataset.boolean = 'false'
            }

            break;
        case 'input_password':
            if (objectUserData.password === target.value) {
                rightStylesInputs(icon,input,errorMessage)
                target.dataset.boolean = 'true'
            } else {
                wrongStylesInputs(icon,input,errorMessage)
                target.dataset.boolean = 'false'
            }
            break;

    }

}


/* Delegación de eventos  para inputs*/
formMainContainer.addEventListener('input', (e) => {
    const targetId = e.target.id
    const target = e.target
    let parentNode = target.closest('.div_input')
    const errorMessage = parentNode.querySelector('.error_message')
    const icon = parentNode.querySelector('.icon')
    const input = parentNode.querySelector('.input')

    switch (targetId) {
        case 'input_email':
            userDataValidation(target, targetId, icon, input, errorMessage)
            /*  funcion que compare el email guardado en localStorage */
            break;
        case 'input_password':
            userDataValidation(target, targetId, icon, input, errorMessage)
            /* confirmar con la creada en localStorage también */
            break;
        case 'input_full_name':
            validInputFunction(e, regexName, icon, input, errorMessage)
            break;
        case 'input_create_email':
            validInputFunction(e, regexEmail, icon, input, errorMessage)
            break;
        case 'input_tel':
            validInputFunction(e, regexTel, icon, input, errorMessage)
            break;
        case 'input_create_password':
            validInputFunction(e, regexPassword, icon, input, errorMessage)

            break;
        case 'input_confirm_password':
            confirmPassword(target, icon, input, errorMessage)
            break;

        default:
            break;
    }
})


/* Enviar datos */
const registerForm = document.getElementById('form_register')

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = e.target.closest('.form')
    let nodeListInputs = form.querySelectorAll('.input')//saco el NodeList porque son elemnetos del DOM
    let arrayInputs = Array.from(nodeListInputs)//convertir a array para que el método every() funcione ya que hay métodos que no funcionan con el nodelist
    console.log(form.id)
    //confirma si todos los inputs son correctos (true) o si hay alguno falso, con el método every() estoy preguntando si todos cumplen cierta condición
   function boolean(arrayInputs) {
     const resultadoBooleano = arrayInputs.every((input) =>{
        if (input.dataset.boolean === 'true') {
             return true
         } else {
             return false
         }
     })
     return resultadoBooleano
   }

     
    if (boolean(arrayInputs)) { 
        switch (form.id) {
            case 'form_register':           
                localStorage.setItem('userData',JSON.stringify(userData)) 
                translateYback()
                break;
        
            case 'form_login':           
                 //función que me lleve a la página de la cesta de compra con el artículo al que le dió añadir a cesta antes de registrarse
                break;  
        }
    } else {
        window.alert('Rellene los datos correctamente por favor🙏. ')
    }
})


