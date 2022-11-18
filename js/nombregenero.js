let querystring = location.search;
let objetoquerystring = new URLSearchParams(querystring);
let id_genero = objetoquerystring.get("search_query")

let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US';

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        console.log(data);
        let generos = data.genres;


        let seccion = document.querySelector('h1');
        let titulo = [];
        console.log(seccion);

        for(let i=0; i<generos.length; i++){
            console.log(generos[i]);
            if (idGenero==generos[i].id) {
                titulo+=`${generos[i].name}`
            }
        }
        seccion.innerText = titulo;

    })
    .catch( function(e){
        console.log(e)
    })