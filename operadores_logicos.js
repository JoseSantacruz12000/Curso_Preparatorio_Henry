
//Operador AND
function mayor_menor(num){
    if (num > 5 && num <10){ 
        return true
    }else{
        return false
    }
}


function mayor_menor_par(num){
    if (num > 5 && num <10 && num % 2 === 0){ 
        return true
    }else{
        return false
    }
}

console.log(mayor_menor_par(7))
console.log(mayor_menor(7))

//Operador OR

function operador_or(str){
    if(str === 'Henry' || str.length < 2 ){
        return true
    }else{
        false
    }
}

console.log(operador_or('Henry'))

//Negacion

function negacion(permiso){
    if(permiso){
        return 'Tiene permiso'
    }else{
        return 'No tiene permiso'
    }
}

console.log(negacion(false))