function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(mult1, mult2){
   return mult1 * mult2;
}

// Chamando a função de soma, dentro da função de multiplicação
console.log(multiplica(soma(2, 3), soma(1, 1)));
