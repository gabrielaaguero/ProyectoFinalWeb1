document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contacto');

    if (!formulario) {
        console.error("No se encontró el formulario.");
        return;
    }

    formulario.addEventListener('submit', function(event) {
       
        event.preventDefault();

   
        const inputNombre = document.getElementById('nombre');
        const inputApellido = document.getElementById('apellido');
        const inputEmail = document.getElementById('email');
        const inputTel = document.getElementById('tel');
        const inputMensaje = document.getElementById('mensaje');


        const errorNombre = document.getElementById('error-nombre');
        const errorApellido = document.getElementById('error-apellido');
        const errorEmail = document.getElementById('error-email');
        const errorTel = document.getElementById('error-tel');
        const errorMensaje = document.getElementById('error-mensaje');


        errorNombre.textContent = '';
        errorApellido.textContent = '';
        errorEmail.textContent = '';
        errorTel.textContent = '';
        errorMensaje.textContent = '';

    
        const nombre = inputNombre.value.trim();
        const apellido = inputApellido.value.trim();
        const email = inputEmail.value.trim();
        const tel = inputTel.value.trim();
        const mensaje = inputMensaje.value.trim();

        let formValido = true;

       

        
        if (nombre === '') {
            errorNombre.textContent = 'El campo nombre es obligatorio.';
            formValido = false;
        } else if (nombre.length < 3) {
            errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres.';
            formValido = false;
        }

        
        if (apellido === '') {
            errorApellido.textContent = 'El campo apellido es obligatorio.';
            formValido = false;
        }

        
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            errorEmail.textContent = 'El correo electrónico es obligatorio.';
            formValido = false;
        } else if (!regexEmail.test(email)) {
            errorEmail.textContent = 'El formato del correo electrónico no es válido.';
            formValido = false;
        }

        
        const regexTel = /^\d{7,15}$/;
        if (tel === '') {
            errorTel.textContent = 'El teléfono es obligatorio.';
            formValido = false;
        } else if (!regexTel.test(tel)) {
            errorTel.textContent = 'El teléfono debe contener solo números (entre 7 y 15 dígitos).';
            formValido = false;
        }

        
        if (mensaje === '') {
            errorMensaje.textContent = 'El mensaje es obligatorio.';
            formValido = false;
        } else if (mensaje.length < 5) {
            errorMensaje.textContent = 'El mensaje debe tener al menos 5 caracteres.';
            formValido = false;
        }


        if (formValido) {
            const zonaResumen = document.getElementById('zona-resumen');
            zonaResumen.innerHTML = '';

           
            const divResumen = document.createElement('div');
            divResumen.className = 'caja-resumen';
            divResumen.style.marginTop = '20px';
            divResumen.style.padding = '15px';
            divResumen.style.border = '1px solid #ccc';
            divResumen.style.backgroundColor = '#f9f9f9';

            const titulo = document.createElement('h3');
            titulo.textContent = '¡Consulta enviada con éxito! Resumen de tus datos:';

            const pNombre = document.createElement('p');
            pNombre.textContent = `Nombre y Apellido: ${nombre} ${apellido}`;

            const pEmail = document.createElement('p');
            pEmail.textContent = `Correo: ${email}`;

            const pTel = document.createElement('p');
            pTel.textContent = `Teléfono: ${tel}`;

            const pMensaje = document.createElement('p');
            pMensaje.textContent = `Mensaje: ${mensaje}`;

           
            const btnReiniciar = document.createElement('button');
            btnReiniciar.textContent = 'Realizar otra consulta';
            btnReiniciar.type = 'button';
            btnReiniciar.style.marginTop = '10px';

            btnReiniciar.addEventListener('click', function() {
                formulario.reset(); 
                zonaResumen.innerHTML = ''; 
            });

           
            divResumen.appendChild(titulo);
            divResumen.appendChild(pNombre);
            divResumen.appendChild(pEmail);
            divResumen.appendChild(pTel);
            divResumen.appendChild(pMensaje);
            divResumen.appendChild(btnReiniciar);

            zonaResumen.appendChild(divResumen);
        }
    });
});