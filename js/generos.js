let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US';
let urlTv= 'https://api.themoviedb.org/3/genre/tv/list?api_key=062d3ce7ea9819367da90034f22a527a&&language=en-US'

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        console.log(data);
        let generos = data.genres;


        let seccion1 = document.querySelector('.generos_lista');
        let generosPelis = [];
        console.log(seccion1);

        for(let i=0; i<generos.length; i++){

            generosPelis += `<li class='generos'><a style="color:black" href="./detallegenero.html?search_query=${generos[i].id}"> ${generos[i].name}</a></li>`
        }
        seccion1.innerHTML = generosPelis;

    })
    .catch( function(e){
        console.log(e)
    })

fetch(urlTv)
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        console.log(data);
        let generosTv = data.genres;


        let seccion = document.querySelector('.generos_lista_tv');
        let generosTodos = [];
        console.log(seccion);

        for(let i=0; i<generosTv.length; i++){

            generosTodos += `<li class='generos'><a style="color:black" href="./detallegenero.html?search_query=${generosTv[i].id}"> ${generosTv[i].name}</a></li>`
        }
        seccion.innerHTML = generosTodos;

    })
    .catch( function(e){
        console.log(e)
    })