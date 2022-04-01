
document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
});


// Nav fijo durante scroll

function navegacionFija() {
    const nav = document.querySelector(".contenedor-nav");
    const hero = document.querySelector(".hero")
    const body = document.querySelector("body");

    window.addEventListener('scroll', () => {
        if( hero.getBoundingClientRect().top < 0) {
            nav.classList.add("scroll-nav");
            body.classList.add('body-scroll');
        } else {
            nav.classList.remove("scroll-nav");
            body.classList.remove('body-scroll');
        }       
    });
}

// Versión mobile

const menuIconoContenedor = document.querySelector('nav .menu-icono-contenedor');
const contenedorNav = document.querySelector('.contenedor-nav');
const bloqueoY = document.querySelector('html');

menuIconoContenedor.addEventListener('click', ()=> {
    contenedorNav.classList.toggle('active');
    bloqueoY.classList.toggle('no-scroll');
    bloqueoY.classList.toggle('no-scroll-long');
});


// Contador textarea

const mensajeTextArea = document.querySelector('#mensajeCliente');
const contador = document.querySelector('#contador');

mensajeTextArea.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});


// Datos Formulario

const datosClienteFormulario = {
    nombreCliente: '',
    apellidoCliente: '',
    telefonoCliente: '',
    correoCliente: '',
    mensajeCliente: ''
}

const nombre = document.querySelector('#nombreCliente');
const apellido = document.querySelector('#apellidoCliente');
const telefono = document.querySelector('#telefonoCliente');
const correo = document.querySelector('#correoCliente');
const mensaje = document.querySelector('#mensajeCliente');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
apellido.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Evento de submit

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Validar formulario

    const { nombreCliente, apellidoCliente, correoCliente, mensajeCliente } = datosClienteFormulario;

    if(nombreCliente === '' || apellidoCliente === '' || correoCliente === '' || mensajeCliente === ''){
        if(nombreCliente === ''){
            mostrarAlerta('El nombre es obligatorio', true);
        } 
        if(apellidoCliente === ''){
            mostrarAlerta('El apellido es obligatorio', true);
        } 
        if(correoCliente === ''){
            mostrarAlerta('El correo es obligatorio', true);
        } 
        if (mensajeCliente === ''){
            mostrarAlerta('El mensaje es obligatorio', true);
        }
        return; // Corta la ejecución del código
    }

    // Enviar formulario

    mostrarAlerta('Datos enviados correctamente :)');

});

function leerTexto(e){
    datosClienteFormulario[e.target.id] = e.target.value;
    // console.log(datosClienteFormulario);
}

// Mostrar alerta en pantalla

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('errorFormulario');
    } else {
        alerta.classList.add('formularioEnviado');
        formulario.reset();
    }

    formulario.appendChild(alerta);

    // Desaparezca después de 5 segundos la alerta

    setTimeout(()=>{
        alerta.remove();
    }, 5000);

}
