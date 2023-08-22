const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let nomesComA = [];
let encontrar = 0;
for(nome of nomes){
    if(nome[encontrar] ==="A" || nome[encontrar] ==="a"){
        nomesComA.push(nome);
    }
}
console.log(nomesComA);