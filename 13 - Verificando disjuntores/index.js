const disjuntores = [false, false, true, false, false, true, false, false];

let posicao = [];

for (let i =0; i<disjuntores.length;i++){
    if (disjuntores[i]===true){
         posicao.push(i);    
    }
}  
for (i of posicao){
    console.log(i);
}


