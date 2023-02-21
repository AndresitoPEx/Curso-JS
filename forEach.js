//Para que sirve el ForEach();
let arrNumeros = [1,2,3,4,5];

let arrNombres = ["pepe", "juan", "lola"];

  
arrNombres.forEach((valor) => {
    console.log(valor);
});

for (let iterator of arrNombres) {
    //console.log(iterator);
    if (iterator ==="juan") {
        break;
    }
}



