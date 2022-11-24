//buscar id
let qs = location.search;
let objetoqs = new URLSearchParams(qs);
let idPeli = objetoqs.get("search_query")


//sacar la info dinamica del html
let titulo = document.querySelector(".pelicula")
let sinopsis = document.querySelector(".sinopsis")
let estreno = document.querySelector(".infogeneral .infocostado #estreno")
let duracion = document.querySelector(".infogeneral .infocostado #duracion")
let imagen = document.querySelector(".infogeneral .portada")
let generos = document.querySelector(".favorito #genero")
let valoracion = document.querySelector(".infocostado #rating")
let fav=document.querySelector("i")

//api
let url = `https://api.themoviedb.org/3/movie/${idPeli}?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        //modificar datos segun el id
        titulo.innerText = data.original_title;
        sinopsis.innerText = data.overview;
        estreno.innerText = 'Release: ' + data.release_date;
        duracion.innerText = data.runtime + ' Minutes'
        valoracion.innerText = parseInt(data.vote_average) * 10 + '/100'

        //buscar portada
        let portada = []
        foto_ruta = data.poster_path
        console.log(foto_ruta);
        portada += `<img src="https://image.tmdb.org/t/p/w500${foto_ruta}" id="foto-shrek" alt="portada">`

        //crear un array de generos para ponerlos en display
        let qGeneros = data.genres

        let genres = []
        for (let i = 0; i < qGeneros.length; i++) {
            idGenero = qGeneros[i].id
            nombreGenero = qGeneros[i].name;
            genres += `<a href="./detallegenero.html?search_query=${idGenero}"> ${nombreGenero} </a>`
        }

        //mostrar imagen y generos
        generos.innerHTML = genres
        imagen.innerHTML = portada
        return data;
    })
    .catch(function (error) {
        return error;
    });

//donde se encuentra la pelicula
URLproveedor = `https://api.themoviedb.org/3/movie/${idPeli}/watch/providers?api_key=062d3ce7ea9819367da90034f22a527a`

fetch(URLproveedor)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        //sacar info de la api
        let sitios = data.results.AR.flatrate;
        
        console.log(sitios);

        let plataforma = document.querySelector(".verEn")
        let todosProveedores = [];
        let lista_proveedores = []
        //crear array con proveedores
        for (let i = 0; i < sitios.length; i++) {
            todosProveedores[i] =sitios[i].provider_name;
        }
        console.log(todosProveedores);
        //lo que va en el html
        lista_proveedores+=`<h3>
        Available in:
    </h3>`
        for (let i = 0; i < todosProveedores.length; i++) {
            lista_proveedores += `<li>${todosProveedores[i]}</li>`
        }
        
        console.log(todosProveedores);
        plataforma.innerHTML = lista_proveedores;
        return data;
    }).catch(function (error) {
        console.log(error);
        return error;
    });


//agregando favoritos    
let favoritos=[]

let recuperoStorage = localStorage.getItem("favoritos")
//si no hay favoritos
if (recuperoStorage != null) {
    favoritos =  JSON.parse(recuperoStorage)
}
//si la pelicula ya esta en favoritos
if (favoritos.includes(idPeli)) {
    fav.innerText = "Quitar de favoritos";
}
//si se clickea en favoritos
fav.addEventListener("click", function(e) {
    e.preventDefault();
    //si esta o no
    if (favoritos.includes(idPeli)) {
       let indice = favoritos.indexOf(idPeli)
       favoritos.splice(indice, 1);
       fav.innerText = "Add";
    }else{
        favoritos.push(idPeli)
        fav.innerText = "Remove"
    }
    //para que quede guardado
    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString )
})

console.log(favoritos)
