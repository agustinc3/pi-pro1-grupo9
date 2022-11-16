let qs = location.search;
let objetoqs = new URLSearchParams(qs);
let idGenero = objetoqs.get("search_query")

console.log(idGenero);

let url = `https://api.themoviedb.org/3/discover/movie?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&withwith_genres=flatrate`



fetch(url)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    let arrayDePelis = data.results;
    let seccion = document.querySelector('.filaPeli');
    let allMovies = [];
    for(let i=0; i< arrayDePelis.length; i++){
        generoId=arrayDePelis[i].genre_ids;
        listaPelis=[]
        let foto_ruta = arrayDePelis[i].poster_path
        if (generoId.includes(parseInt(idGenero))) {
            allMovies += `<article  class="portada" ><a href="./detallepeli.html?search_query=${arrayDePelis[i].id}"><img src="https://image.tmdb.org/t/p/w500${foto_ruta}" alt="portada"></a>
            <p class="filatxt">${arrayDePelis[i].title}</p>
        </article>`
        }
    }
    console.log(allMovies);
    seccion.innerHTML = allMovies;

    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});

let urlTv= `https://api.themoviedb.org/3/discover/tv?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0)`

fetch(urlTv)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    let arrayDeSeries = data.results;
    console.log(data.results);
    let seccion1 = document.querySelector('.filaTv');
    let allSeries = [];
    for(let i=0; i< arrayDeSeries.length; i++){
        generoId=arrayDeSeries[i].genre_ids;
        listaSeries=[]
        let foto_ruta = arrayDeSeries[i].poster_path
        if (generoId.includes(parseInt(idGenero))) {
            allSeries += `<article  class="portada" ><a href="./detalleserie.html?search_query=${arrayDeSeries[i].id}"><img src="https://image.tmdb.org/t/p/w500${foto_ruta}" alt="portada"></a>
            <p class="filatxt">${arrayDeSeries[i].name}</p>
        </article>`
        }
    }
    seccion1.innerHTML = allSeries;

    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});




