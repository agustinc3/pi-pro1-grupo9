let qs= location.search
let qsObj= new URLSearchParams(qs)
let personaje= qsObj.get('busqueda')

let url= `https://api.themoviedb.org/3/search/movie?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US&page=1&include_adult=false&query=${personaje}`

fetch(url)
.then(function(response){
    return response.json();

}).then(function(data){

    let arrayDePersonajes = data.results;
    console.log(arrayDePersonajes)
    let seccion = document.querySelector('.generos_lista')
    let allCharacters=[]

    for(let i=0;i<3;i++){
        allCharacters+=`<li class='generos'> <a style="color:black" href="./detallepeli.html?search_query=${arrayDePersonajes[i].id}"><p>Name: ${arrayDePersonajes[i].title}</p></a>`
  

        
     
    }
    console.log(allCharacters)
seccion.innerHTML = allCharacters
return data})
.catch(function(error){
    console.log(error)
    return error
})

