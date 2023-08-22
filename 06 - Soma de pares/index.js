const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let pares =[];
for(numero of numeros){
    if(numero%2===0){
        pares.push(numero);
    }
}
let soma = 0;
for(par of pares){
    soma+=par;
}
console.log(soma);
