const array = [1,2,3,4,5,6,7,8,9,10,50];

let cadena = array.map(valor =>{
    return valor*2
})

console.log(cadena)



const countWords = text => {

    const words = new Map();
    let cadena = []

    text.toLowerCase().replace(/[^a-z0-9]/g, " ").split(" ").forEach(word => {
        if (word === "") {
            return;
        }
        if (words.has(word)) {
            words.set(word, words.get(word) + 1);
        } else {
            words.set(word, 1);
        }
    });

    words.forEach((count, word) => {
        cadena.push(word + " se ha repetido " + count + " " + (count === 1 ? "vez" : "veces"))
    });
    return cadena
}

let variableRandom = countWords("hola hola hola amigo")

console.log(variableRandom)







