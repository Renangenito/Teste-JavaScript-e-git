function descobrirIdade (nascimento, anoAtual){
   return anoAtual - nascimento;
}
//Concatenação
console.log("Sua idade é " + descobrirIdade(1994, 2021) + " anos");

//template string
console.log(`Sua idade é ${descobrirIdade(1994, 2021)} anos`);

function nomeEIdade (nome, idade){

    return  `meu nome é ${nome} e eu tenho ${idade} anos`;  
    
 } 

 console.log(nomeEIdade("Renan", 27));

 


