function createCards(elemento) {
  // llamamos a la api con fetch
  fetch(
    "https://preview.contentful.com/spaces/ijty4i0htq9n/environments/master/entries?access_token=_k3riHq77wPayIXr_svPPX7Cgpy3Tas0qQQu8wn-Kuw&content_type=portfolioWeb"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      datosConteful = data.items;
      console.log(datosConteful);

      // ---------------

      //  como son varios elementos que tiene la Api ,lo voy a iterar
      // primero selecionamos el template
      const works = document.querySelector("#template_work");
      // luego selecionamos el lugar donde va a ponerse el template
      const insert_work = document.querySelector(`.${elemento}`);
      // limpia el contenido antes de volver a mostrar nuevos datos , esto evita duplicados
      insert_work.innerHTML = "";

      for (const x of datosConteful) {
        // Clonamos el contenido de works
        const clon = works.content.cloneNode(true);
        const imagen = clon.querySelector(".template_work_img");
        const titulo = clon.querySelector(".template_work_h3");
        const parrafo = clon.querySelector(".template_work_p");

        // ahora vamos a consumir la api, para eso necesitamos el id de la imagen
        const imageId = x.fields.imagenWork.sys.id;

        // Ahora voy a buscar cada id unico de cada imagen con su url, es data  y no x por que contenful tiene como dos ramas , en uno guarda el id y otro el link
        const asset = data.includes.Asset.find((a) => a.sys.id === imageId);

        //  una vez encontramos el id, le anadimos el https para poder insertarlo en el link
        const imageUrl = "https:" + asset.fields.file.url;

        imagen.src = imageUrl;
        titulo.textContent = x.fields.titleWork;
        parrafo.textContent = x.fields.workDescription;

        insert_work.appendChild(clon);
      }
    });

  //
}
