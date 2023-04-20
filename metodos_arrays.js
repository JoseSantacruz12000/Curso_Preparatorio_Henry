const colores = ['amarillo', 'azul']
colores.push('rojo') // Ingresa un valor al arreglo en la ultima posicion
colores.unshift('verde') // Ingresa un valor al arreglo en la primera posicion
colores.pop() // Elimina el ultimo valor del array
colores.shift() // Elimina el primer elemento del array

console.log(colores)

// includes verifica si se encuenta en el array un elemento especificado
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

//every funcion creada con la premisa si cumplen todos los elementos del array
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

// split convierte el string en un array dependiendo de el salto que se elija
let palabra = 'Henry son los mejores';
let palabraSeparada = palabra.split(' ');

// palabraSeparada[palabraSeparada.length-1]='y'

let palabraArreglada = palabraSeparada.join(' ')

console.log(palabraSeparada);
console.log(palabraArreglada);


// foreach
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// map realiza una copia del arreglo original y se pueden efectuar cambios
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);