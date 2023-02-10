//push(): Agrega uno o más elementos al final del array.
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Imprime: [1, 2, 3, 4]

//pop(): Elimina el último elemento del array y lo devuelve.
let numbers = [1, 2, 3];
let lastNumber = numbers.pop();
console.log(numbers); // Imprime: [1, 2]
console.log(lastNumber); // Imprime: 3

//unshift(): Agrega uno o más elementos al principio del array.
let numbers = [1, 2, 3];
numbers.unshift(0);
console.log(numbers); // Imprime: [0, 1, 2, 3]

//shift(): Elimina el primer elemento del array y lo devuelve.
let numbers = [1, 2, 3];
let firstNumber = numbers.shift();
console.log(numbers); // Imprime: [2, 3]
console.log(firstNumber); // Imprime: 1

//indexOf(): Devuelve el índice del primer elemento que coincide con el valor especificado, o -1 si no se encuentra el valor.
let numbers = [1, 2, 3, 2];
let index = numbers.indexOf(2);
console.log(index); // Imprime: 1

//includes(): Devuelve un valor booleano que indica si el array incluye un determinado elemento.
let numbers = [1, 2, 3];
let includesTwo = numbers.includes(2);
console.log(includesTwo); // Imprime: true

//slice(): Devuelve una porción de los elementos del array como un nuevo array.
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice(1, 3);
console.log(newNumbers); // Imprime: [2, 3]

//splice(): Modifica un array eliminando elementos existentes y/o agregando nuevos elementos.
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2, 6, 7);
console.log(numbers); // Imprime: [1, 2, 6, 7, 5]

//sort(): Ordena los elementos del array en orden alfabético o numérico.
let numbers = [3, 1, 2];
numbers.sort();
console.log(numbers); // Imprime: [1, 2, 3]


//reverse(): Invierte el orden de los elementos del array.
let numbers = [1, 2, 3];
let pets = ["perro","gato","loro"];
numbers.reverse();
pets.reverse();
console.log(numbers);
console.log(pets);