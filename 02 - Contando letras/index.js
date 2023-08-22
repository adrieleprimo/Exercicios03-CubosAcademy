const letras = ["A", "a", "B", "C", "E", "e"];
let somaLetras = 0;
let encontrado = false;
for(letra of letras){
    if (letra === "E" || letra === "e"){
        somaLetras++;
        encontrado = true;
    }
}
if(encontrado === true){
    console.log(`Foram encontradas ${somaLetras} letras "E" ou "e"`);
} else {
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
}