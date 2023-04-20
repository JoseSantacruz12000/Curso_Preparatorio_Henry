function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej: 
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  
    // Tu código aca:
    var cadena = []
    array.map(valor => {
        if (typeof valor == 'number'){
            cadena.push(valor)
        }
    })
    return cadena
}

let array = [1,2,3,4,7, 'hola mundo']
console.log(soloNumeros(array))
console.log(typeof 'array')


function stringMasLarga(strings) {
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
    // Tu código aca:

    for (let i=1; i < strings.length; i++){
         var guardado = strings[0]
         if (strings[i].length > guardado.length){
            guardado = strings[i]
         }
    }
    return guardado
}
  

console.log(stringMasLarga(['JavaScript', 'HTML', 'CSS']))


function buscarAmigo(amigos, nombre) {
    // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
    // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
    // recibe un string llamado 'nombre'.
    // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
    // Ej:
    //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
    //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
  
    // Tu código aca:
    var salida;
    amigos.forEach(obj => {
        nombre_obj = obj.nombre
        if (nombre_obj === nombre){
            salida = obj
        }
    })
    return salida
}

var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
console.log(buscarAmigo(amigos, 'Emi'))


function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:

    num_str = num.toString()
    num_length = num_str.length
    for(i = 0; i < num_length / 2; i++){
        if(num_str[i] !== num_str[num_length -1 -i]){
            return false
        }
    }

    return true
}

console.log(numeroSimetrico(11711))

function pluck(array, propiedad) {
    // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
    // propiedad.
    // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    // Ej:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    // Pista: es una buena oportunidad para usar map.
  
    // Tu código acá:

    return array.map(objt =>{
        if(Object.hasOwn(objt, propiedad)){
            return Object.getOwnPropertyDescriptor(objt,propiedad).value
        }else{
            return 'Introduce una llave correcta'
        }
    })

  }

var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
console.log(pluck(productos, 'name'))