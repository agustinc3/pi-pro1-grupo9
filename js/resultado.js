let qs= location.search
let qsObj= new URLSearchParams(qs)
let personaje= qsObj.get('busqueda')

let url= `https://api.themoviedb.org/3/search/${personaje}?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US&page=1&include_adult=false`

fetch(url)
.then(function(response){
    return response.json();

}).then(function(data){

    let arrayDePersonajes = data.results;

    let seccion = document.querySelector('.containter')
    let allCharacters=[]

    for(let i=0;i<3;i++){
        allCharacters+=`<a href="./detallepeli.html?search_query=${arrayDePersonajes[i].id}"><article>
        <ing src=${arrayDePersonajes[i].image}
        <p>Name: ${arrayDePersonajes[i].name}</p>
        <p>Status: ${arrayDePersonajes[i].status}</P>
        <article></a>`
    }
    
seccion.innerHTML = allCharacters
return data
.catch(function(error){
    console.log(error)
    return error
})
})
