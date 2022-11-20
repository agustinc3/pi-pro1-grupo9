let urlTrending= `https://api.themoviedb.org/3/discover/movie?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`



fetch(urlTrending)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    let populares=[]
    let arrayDePelis = data.results;
    let masVistas= document.querySelector('.ulpeli1')

    for (let i = 0; i < 5; i++) {
        let foto_ruta = arrayDePelis[i].poster_path
        let nombre= arrayDePelis[i].title
        let id= arrayDePelis[i].id
        let launch= arrayDePelis[i].release_date
        
        populares+=`<li class="lipeli1">
        <h3>${nombre}</h3>
        <a href="./detallepeli.html?search_query=${id}">
            <img class="imagenLista" src="https://image.tmdb.org/t/p/w500${foto_ruta}" alt="portada">
        </a>
        <h4>${launch}</h3></li>`
        
    }
    masVistas.innerHTML=populares
}).catch(function(error) {
    console.log(error);
    return error;})


let urlTrendingTv=`https://api.themoviedb.org/3/discover/tv?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

fetch(urlTrendingTv)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    let populares=[]
    let arrayDePelis = data.results;
    let masVistas= document.querySelector('.ulpeli2')

    for (let i = 0; i < 5; i++) {
        let foto_ruta = arrayDePelis[i].poster_path
        let nombre= arrayDePelis[i].name
        let id= arrayDePelis[i].id
        let launch= arrayDePelis[i].first_air_date
        
        populares+=`<li class="lipeli2">
        <h3>${nombre}</h3>
        <a href="./detalleserie.html?search_query=${id}">
            <img class="imagenLista" src="https://image.tmdb.org/t/p/w500${foto_ruta}" alt="portada">
        </a>
        <h4>${launch}</h3></li>`
        
    }
    masVistas.innerHTML=populares
}).catch(function(error) {
    console.log(error);
    return error;})

let urlVotos=`https://api.themoviedb.org/3/discover/movie?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate` 

fetch(urlVotos)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    let populares=[]
    let arrayDePelis = data.results;
    let masVistas= document.querySelector('.ulpeli3')

    for (let i = 1; i < 6; i++) {
        let foto_ruta = arrayDePelis[i].poster_path
        let nombre= arrayDePelis[i].title
        let id= arrayDePelis[i].id
        let launch= arrayDePelis[i].release_date
        
        populares+=`<li class="lipeli3">
        <h3>${nombre}</h3>
        <a href="./detallepeli.html?search_query=${id}">
            <img class="imagenLista" src="https://image.tmdb.org/t/p/w500${foto_ruta}" alt="portada">
        </a>
        <h4>${launch}</h3></li>`
        
    }
    masVistas.innerHTML=populares
}).catch(function(error) {
    console.log(error);
    return error;})
