let recuperoStorage = localStorage.getItem("favoritos");


let favoritos = JSON.parse(recuperoStorage);

let section = document.querySelector('#lista');

let personajesFavoritos = '';

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay datos en favoritos<p/>'
} else {
    for (let i = 0; i < favoritos.length; i++) {
   
        let url = `https://api.themoviedb.org/3/search/company?api_key=062d3ce7ea9819367da90034f22a527a&page=1${favoritos[i]}`;
    
        fetch(url)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(data) {

            personajesFavoritos += `<a href="./detalle.html?buscador=${data.id}"><article>
                                        <img src=${data.image} alt='${data.name}' />
                                        <p>Name: ${data.name} </p>
                                        <p>Status: ${data.status} </p>
                                    </article></a>`
            section.innerHTML = personajesFavoritos;
            return data;
        })
        .catch(function(error) {
            console.log(error);
            return error;
        });
    
    };

    
}