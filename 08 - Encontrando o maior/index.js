const numeros = [3, 5000, 10,  11, 7, 30];

let maior  = 0;

for(let i =0; i<=numeros.length;i++){
    if(numeros[i]> maior){
        maior = numeros[i];
    } 
   
}
console.log(maior);