/* exemplo validação*/
function validar(entrada, limiteInferior, limiteSuperior){
    if(!limiteInferior){
        limiteInterior = -Infinity;
    }
    if(!limiteSuperior){
        limiteSuperior = Infinity;
    }
    if(entrada && entrada.trim() && !isNaN(Number(entrada)) && Number(entrada) > limiteInferior && Number(entrada) < limiteSuperior){
        return true;
    }
    return false;
}
/*
Exercício 1
*/
let idade = prompt("Quantos anos você tem?");
let salario = prompt("Quanto você recebe?");
let emprestimo = prompt("Quanto você quer de empréstimo?");
let juros = 1.085;

if(validar(idade, 21, 55) && validar(salario, 1000) &&  validar(idade, 500, 15*salario)){
    alert(`Você pode fazer o empréstimo de ${emprestimo}`);
    let formadepagamento = confirm("Você gostaria de parcelar?");
    let parcelas = prompt("Nós parcelemos de 3 até 24 vezes. Qual parcela é melhor para você?");
    
    if(formadepagamento && parcelas >=3 && parcelas <=24){
        alert(`Você irá parcelar o empréstimo de R$ ${emprestimo} em ${parcelas} parcelas de R$ ${emprestimo/parcelas*juros}. Ao todo você pagará R$ ${emprestimo*juros}`);
    }
    else if(parcelas < 3 && parcelas >24){
        alert("Não parcelamos nesse tanto de vezes")
    }
    else{
        alert("OK, não iremos parcelar o empréstimo!");
    }
}
else{
    alert(`Você não pode fazer o empréstimo de R$ ${emprestimo}`);
}

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
    for(let i = 1; index <= altura; i++){
        lista.push(caracter.repeat(i))
    }
    
    lista.forEach(function(item) {
        console.log(item)
    })

    for(let item in lista){
        console.log(lista[item]);
    }
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