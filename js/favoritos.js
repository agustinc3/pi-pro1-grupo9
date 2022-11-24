let recuperoStorage = localStorage.getItem("favoritos");


let favoritos = JSON.parse(recuperoStorage);

let section = document.querySelector('.fila');
let peliculasFavoritas=[]



if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay datos en favoritos<p/>'
} else {
    for (let i = 1; i < favoritos.length; i++) {
        let idPeli=favoritos[i]
        console.log(idPeli)
        let url = `https://api.themoviedb.org/3/movie/${idPeli}?api_key=062d3ce7ea9819367da90034f22a527a&language=en-US`;
    
        fetch(url)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(data) {
            
            console.log(data)

        peliculasFavoritas += `<a href="./detallepeli.html?search_query=${data.id}"><article>
                                        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>
                                        <p style="color:black">Name: ${data.original_title} </p>
                                        </article>
                                    </a>`
            section.innerHTML =peliculasFavoritas;
            return data;
        })
        .catch(function(error) {
            console.log(error);
            return error;
        });
    
    };

    
}
console.log(favoritos)
