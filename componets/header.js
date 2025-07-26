function createHeaderCom(elemento) {
  //llamo al selector donde voy a poner mi html
  const contenedor = document.querySelector(`.${elemento}`);
  contenedor.innerHTML = `
            <a href="./index.html">
            <img class="logo_name" src="./src/Logotipo Nombre Jimmy Miguel  Galarza.png" alt="">
            </a>
        <div class="links">
            <img class="icono-cerrar" src="./src/icono-cerrar.svg" alt="">
            <a href="./portfolio.html">Portfolio</a>
            <a href="./servicio.html">Servicios</a>
            <a href="./contacto.html">Contacto</a>
        </div>
        <img class="menu-ico" src="./src/icons8-menu.svg " alt="">
    
    `;

  //  Creamos la logica para que cada vez que se haga click en la img menu
  // se habra una pestana

  const menuIcono = contenedor.querySelector(".menu-ico");
  const openMenu = contenedor.querySelector(".links");
  const icoCerrar = contenedor.querySelector(".icono-cerrar");

  menuIcono.addEventListener("click", () => {
    openMenu.classList.add("linksAbierto");
  });

  icoCerrar.addEventListener("click", () => {
    openMenu.classList.remove("linksAbierto");
  });
}
