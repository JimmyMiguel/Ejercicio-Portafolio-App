function crearFormulario(elemento) {
  // El elemento sera donde se va a pegar el formulario
  const templatePlace = document.querySelector(`.${elemento}`);
  templatePlace.innerHTML = `
<h3>Escribime</h3>

<form class="formulario" id="contactForm" action="">
<label class="name" for="">
    <h4>Nombre</h4>
    <input type="text" name="nombre" placeholder="Tu nombre" required>
</label>

<label class="email" for="">
    <h4>Email</h4>
    <input type="email" name="email" placeholder="Tu @mail.com" required>
</label>

<label class="mensaje" for="">
    <h4>Mensaje</h4>
    <textarea name="areaTexto" required></textarea>
</label>

<button class="boton" type="submit">Enviar</button>
</form>

`;

  //  ahora vamos a crear la logica para que el formulario se envie

  const contactForm = document.querySelector("#contactForm");

  contactForm.addEventListener("submit", (e) => {
    // e.preventDefault(); hace que cuando se envie el formulario no se recargue la pagina
    e.preventDefault();
    // creamos un objeto formData para obtener los datos del formulario
    const formData = new FormData(contactForm);
    // obtenemos los datos del formulario
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const areaTexto = formData.get("areaTexto");

    // ahora vamos a enviar los datos a la api de Apx, y este a su vez me enviar 
    // un email a mi correo con los datos del formulario

    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST", // metodo de envio
      headers: { "content-type": "application/json" }, // headers de la peticion

      body: JSON.stringify({
        to: "jimmymiguelgalarza@gmail.com", // tu dirección de email
        message: `Nombre: ${nombre}, Mensaje: ${areaTexto}`, // el contenido del mensaje
      }),
    })
      .then((res) => res.json()) // obtenemos la respuesta de la peticion
      .then((data) => {
        console.log("Email enviado", data); // mostramos la respuesta de la peticion
        // Acá podés mostrar un mensaje al usuario
      })
      .catch((err) => console.error("Error enviando email", err)); // mostramos el error de la peticion
  });
}
