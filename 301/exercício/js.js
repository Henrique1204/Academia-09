/*
EXERCÍCIO 1
let idade = prompt("Quantos anos você tem?");
let salario = prompt("Quanto você recebe?");
let emprestimo = prompt("Quanto você quer de empréstimo?");
let juros = 1.8;

if(((idade >=21 && idade <=55) && salario >=1000) && emprestimo>=500 && emprestimo<=15*salario){
    alert(`Você pode fazer o empréstimo de ${emprestimo}`);
    let formadepagamento = confirm("Você gostaria de parcelar?");
    let parcelas = prompt("Nós parcelemos de 3 até 24 vezes. Qual parcela é melhor para você?");
    
    if(formadepagamento && parcelas >=3 && parcelas <=24){
        alert(`Você irá parcelar o empréstimo de ${emprestimo} em ${parcelas} parcelas de ${emprestimo/parcelas*juros}. Ao todo você pagará ${emprestimo*juros}`);
    }
    else{
        alert("OK, não iremos parcelar o empréstimo!");
    }
}
else{
    alert(`Você não pode fazer o empréstimo de ${emprestimo}`);
}
*/

/*
Exercício 2
let numero = Math.floor(Math.random() * 50 +1);
let chute = Number(prompt("Tente adivinhar o número secreto!"));

while(chute != numero){
    if(chute &gt; numero){
        alert("Chute um número menor");
    }
    if(chute &lt; numero){
        alert("Chute um número maior");
    }
    chute = Number(prompt("Tente outro chute!"))
}
alert("Você acertou o número!")
*/
