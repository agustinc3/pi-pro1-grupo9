let qs = location.search;
let objetoqs = new URLSearchParams(qs);
let idGenero = objetoqs.get("buscador")

console.log(idGenero);

let url = `https://api.themoviedb.org/3/search/movie?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US&page=1&include_adult=false`

fetch(url)
.then(function(response) {
    return response.json();
}).then(function(data) {
    let arrayDePelis = data.results;

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