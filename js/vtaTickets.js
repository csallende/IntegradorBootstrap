// precio 
const precioTicket = 200;

//porcentajes de descuento 
let dctoEstudiante = 80;
let dctoTrainee    = 50;
let dctoJunior     = 15;

// elementos de variables
let nombre          = document.getElementById("inputNombre");
let apellido        = document.getElementById("inputApellido");
let mail            = document.getElementById("inputMail");
let cantidadTickets = document.getElementById("inputCantidad");
let categoria       = document.getElementById("categ").value;


//quitar el estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

//total a pagar
function total_a_pagar() {

   
    quitarClaseError();

   
    if (nombre.value === " ") {
        alert("Escriba su nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Escriba su apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === " ") {
        alert("Escriba su email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electrónico es válido o no
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Escriba un correo electrónico válido");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // cantidad tickets ingresados mayor o igual a 1 o error
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Ingrese correctamente la cantidad de tickets");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    //selección de categoría
    if (categoria.value == "") {
        alert("Seleccione una categoría");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    // precio total
    let totalValorTickets = (cantidadTickets.value) * precioTicket;

    //descuentos
    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (dctoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (dctoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (dctoJunior / 100 * totalValorTickets);
    }

   
    totalPago.innerHTML = totalValorTickets;
}

    btnResumen.addEventListener('click', total_a_pagar);


function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}

btnBorrar.addEventListener('click', reset_total_a_pagar);