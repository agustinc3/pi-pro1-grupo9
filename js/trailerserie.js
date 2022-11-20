let query = location.search;
let objetoquery = new URLSearchParams(qs);
let id = objetoqs.get("search_query")

let urlTrailer=`https://api.themoviedb.org/3/tv/${id}/videos?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US`

let trailer= document.querySelector('.trailer')

fetch(urlTrailer)
.then(function(response) {
    return response.json();
}).then(function(data) {
    videos=data.results
    console.log(videos);
    clave1=videos[0].key

    if (clave1!='') {
        video=`<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/${clave1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        
    }else{
        video= `<h3>No trailers</h3>`
    }
    
    trailer.innerHTML= video
    /*para los demas trailers*/
    let trailers=document.querySelector('.otros-trailers')
    let otros_trailers=[]
    for (let i = 1; i < videos.length; i++) {
        clave=videos[i].key;
        if (i==1) {
            otros_trailers+=`<h3>More videos</h3>`
        }
        otros_trailers+=`<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/${clave}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }

    trailers.innerHTML=otros_trailers
    
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});
