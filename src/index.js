
let peso = 75
let altura = 1.76
let imc = peso/ (altura * altura)

console.log('Seu imc é:'+imc);


if(imc > 0 && imc <18.5){
  console.log('Abaixo do peso')
}

else if (imc > 18.5 && imc < 24.9){
  console.log('Peso ideal')
}


else if (imc > 25.0 && imc < 29.9){
  console.log('Levemente acima do peso')
}


else if (imc > 30.0 && imc < 34.9){
  console.log('Obesidade grau 1')
}

else if (imc > 35.0 && imc < 39.9){
  console.log('Obesidade grau 2')
}

else if (imc >= 40 ){
  console.log('Obesidade grau 3')
}
else {console.log('Dados informados errados')}


