let form        = document.querySelector('formulario');
let busqueda    = document.querySelector('#busqueda');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (busqueda.value == "") {
        alert('No podes enviar el form vacio');
    } else if(busqueda.value.length <= 3){
        alert('Tenes que escribir mas de 3 caracteres');
    } else {
        this.submit();
    }

})  