let senha = "1256";

let senhaDigitada = prompt("Digite a sua senha");

let tentativas = 3

while (tentativas > 0){
tentativa = tentativas -1;
if(senhaDigitada.toLowerCase().trim()=== senha.toLowerCase().trim()){
alert("acesso permetido");
break;
}
else{
if(tentativas ===0){
alert("número de tentativas esgotadas,acesso negado");
break;
}
alert("senha incorreta,tentativas restantes: ".concat(tentativas));
senhaDigitada = prompt("digite novamente:")
}
}
