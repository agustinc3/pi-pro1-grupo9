let form        = document.querySelector('form');
let busqueda    = document.querySelector('#busqueda');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (busqueda.value == "") {
        alert('No puedes enviar el form vacio');
    } else if(busqueda.value.length <= 3){
        alert('Debes escribir mas de 3 caracteres');
    } else {
        this.submit();
    }

})