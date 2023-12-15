/* Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`. */


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]


const categorias = [];  //creamos una variable vacia en la que almacenar la informacion solicitada

for(let movie of movies){    //el primer forof, es para crear una copia del array original para no hacer modificaciones del original.
    for(cat of movie.categories){  //hacemos otro forof creando otra variable para las categorias de la copia del array principal
        if(!categorias.includes(cat)){ //especificamos que nos incluya las categorias, y colocamos ! para traducirlo asi: "si la categoría NO está en uniqueCategories, entonces haz algo".
            categorias.push(cat); // esto es lo que hace, con push enviamos el if de arriba, dentro de categorias
        }
    }
}
console.log(categorias);