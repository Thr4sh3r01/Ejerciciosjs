var heroes = document.querySelectorAll('[data-function="testMe"]');
        
// Iterar sobre los elementos seleccionados y mostrar por consola
heroes.forEach(function(elemento) {
    console.log(elemento.textContent);
});