//Estos son los 3 tipos del bucle For
//for tradicional
for (let i = 0; i <= 5; i++) {
    //console.log(i);
  }
let string = "Hola mundo";
    for (let i = 0; i < string.length; i++) {
    //console.log(string[i]);
}

//for...of
let array = [1, 2, 3, "Hola", "Pepe"];
    for (let i of array) {
    //console.log(i);
}

//for...in
let persona = {nombre: "Pepe", edad: 30, pais: "USA"};
    for (let i in persona) {
    console.log(i + ": "+persona[i]);
}


