let qs      = location.search;
let qsObj   = new URLSearchParams(qs);
let personaje = qsObj.get('busqueda');

let url = `https://api.themoviedb.org/3/search/company?api_key=062d3ce7ea9819367da90034f22a527a&page=1${personaje}`;

fetch(url)
.then(function(response) {
    return response.json();
}).then(function(data) {
    
    let arrayDePersonajes = data.results;

    let seccion = document.querySelector('.container');
    let allCharacters = [];

    for(let i=0; i< 3; i++){
        allCharacters += `<a href="./detalle.html?buscador=${arrayDePersonajes[i].id}"><article>
                            <img src=${arrayDePersonajes[i].image} alt='${arrayDePersonajes[i].name}' />
                            <p>Name: ${arrayDePersonajes[i].name} </p>
                            <p>Status: ${arrayDePersonajes[i].status} </p>
                        </article></a>`
    }
    seccion.innerHTML = allCharacters;
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});
