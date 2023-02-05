//Tipos en JS - Tipos Referenciados
//1.Objetos
let persona = {
  nombre: "Anita",
  edad: 20,
  direccion: {
    ciudad: "Miami",
    pais: "Estados Unidos"
  }
};
console.log(persona.nombre); 
//2.Arrays
let frutas = ["manzana", "piña", "pera"];
console.log(frutas[0]); 
//3.Funciones
let saludar = function() {
    console.log("Hoy es viernes");
  };
  saludar();
  saludar();
  saludar();
//4.Date
let hoy = new Date();
console.log(hoy.getFullYear());



