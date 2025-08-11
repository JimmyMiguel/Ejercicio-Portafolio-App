function crearFooter(elemento) {
    const templatePlace = document.querySelector(`.${elemento}`);
    templatePlace.innerHTML = `

    <div class="logo">
    <img src="./assets/images/Logotipo Nombre Jimmy Miguel  Galarza.png" alt="">
</div>

<div class="footer__header">

    <div class="home footer__align">
        <img src="./assets/images/home.png" alt="">
        <a href="http://">Home</a>
    </div>
    <div class="servicios footer__align">
        <img src="./assets/images/user.png" alt="">
        <a href="http://">Servicios</a>
    </div>
    <div class="phone footer__align">
        <img src="./assets/images/phone.png" alt="">
        <a href="http://">Contactos</a>
    </div>

</div>

<div class="redes-sociales">
    <img src="./assets/images/linkedin.png" alt="">
    <img src="./assets/images/tuitter.png" alt="">
    <img src="./assets/images/github.png" alt="">
</div>

<a class="link-apx" href="https://apx.school">©2022 - https://apx.school</a>


    `;
    
}