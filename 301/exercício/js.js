/*
Exercício 1
let idade = prompt("Quantos anos você tem?");
let salario = prompt("Quanto você recebe?");
let emprestimo = prompt("Quanto você quer de empréstimo?");
let juros = 1,085;

if(((idade >=21 && idade <=55) && salario >=1000) && emprestimo>=500 && emprestimo<=15*salario){
    alert(`Você pode fazer o empréstimo de ${emprestimo}`);
    let formadepagamento = confirm("Você gostaria de parcelar?");
    let parcelas = prompt("Nós parcelemos de 3 até 24 vezes. Qual parcela é melhor para você?");
    
    if(formadepagamento && parcelas >=3 && parcelas <=24){
        alert(`Você irá parcelar o empréstimo de R$ ${emprestimo} em ${parcelas} parcelas de R$ ${emprestimo/parcelas*juros}. Ao todo você pagará R$ ${emprestimo*juros}`);
    }
    else if(parcelas <3 && >24){
        alert("Não parcelamos nesse tanto de vezes")
    }
    else{
        alert("OK, não iremos parcelar o empréstimo!");
    }
}
else{
    alert(`Você não pode fazer o empréstimo de R$ ${emprestimo}`);
}
*/

/*
Exercício 2
let numero = Math.floor(Math.random() * 50 +1);
let chute = Number(prompt("Tente adivinhar o número secreto!"));

while(chute != numero){
    if(chute > numero){
        alert("Chute um número menor");
    }
    else(chute < numero){
        alert("Chute um número maior");
    }
    chute = Number(prompt("Tente outro chute!"))
}
alert("Você acertou o número!")
*/

/*
lista em que você quer fazer o push.push(LETRA QUE VOCÊ QUER ADICIONAR NO ARRAY) - serve para adicionar elementos ao array
o que vai ser repetido.repeat(Quantidade que é pra ser repetido) - serve para repetir strings
*/

/*
Exercício 3

function escada(altura){
    let lista = [];
    for(let index = 1; index <= altura; index++){
        lista.push(caracter.repeat(index))
    }
    
    lista.forEach(function(item) {
        console.log(item)
    })
}

let degraus = Number(prompt("Escolha a quantidade de degraus"));
let caracter = prompt("Escolha o caracter");
escada(degraus)

*/

/*
Exercício 4

let meninos = ["A", "B", "C"];
let meninas = ["a", "b", "c"];
let i = 0;

while(i < meninos.length){
    let j = 0;

    while(j < meninas.length){
        console.log(`Casal: ${meninos[i]} e ${meninas[j]}`);
        j ++;
    }
    i ++;
}

*/