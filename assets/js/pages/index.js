function main() {
  createHeaderCom("headerCom");
  createCards("workPlace");
  crearFormulario("formulacio-Seccion");

  fetch(
    "https://preview.contentful.com/spaces/ijty4i0htq9n/environments/master/assets/1Q1DRQV3Afo70Pz874ScO9?access_token=_k3riHq77wPayIXr_svPPX7Cgpy3Tas0qQQu8wn-Kuw"
  ).then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return respuesta.json()
  })
  .then(
    (data)=>{
        console.log(data)
        const imagen  = document.querySelector(".abautMe img")
        imagen.src = data.fields.file.url



    }
  )



}

main();
