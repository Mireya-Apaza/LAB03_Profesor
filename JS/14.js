let miNumero = "17";

let edad = Number(miNumero);
console.log(edad);

if ( isNaN(edad)){
    console.log("No es un número");
}
else{
    if (edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy jiven para votar");
    }
}

if ( isNaN(edad)){
    console.log("No e sun número");
}
else{
    let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
    console.log(resultado);
}
