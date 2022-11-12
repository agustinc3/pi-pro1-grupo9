let qs = location.search;
let objetoqs = new URLSearchParams(qs);
let idGenero = objetoqs.get("buscador")

let url = `https://api.themoviedb.org/3/find/{external_id}?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US&external_source=imdb_id`

fetch(url)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    let arrayDePelis = data.results;
    console.log(arrayDePelis);

    let seccion = document.querySelector('.filaPeli');
    let allMovies = [];

    for(let i=0; i< 4; i++){
        allMovies += `<article><a href="./detallepeli.html?search_query=${arrayDePelis[i]}"><img src="./img/Captura.PNG" alt="portada"></a>
        <p class="filatxt">${arrayDePelis[i]}</p>
    </article>`
    }
    seccion.innerHTML = allMovies;
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});