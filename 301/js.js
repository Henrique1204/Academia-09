/*let numero = Number(prompt("Até que número você quer contar?"));
let contador = 0;


while(contador <= numero){
    alert(contador);
    
    contador = contador + 1;
}*/

/*let tabuada = Number(prompt("Digite um número para ver a tabuada"));
let limite = Number(prompt("Até quando vai a tabuada para você?"));
let numero = 0;

while(numero <= limite){
    console.log(`${tabuada} X ${numero} = ${tabuada*numero}`);
    
    numero++;
}*/

/*let entrada = prompt("Digite um número:");
let continuar = true;

while((isNaN(Number(entrada)) || (!entrada || !entrada.trim()) && continuar )){
    continuar = confirm("Você deveria digitar um valor válido. Clique OK para tentar novamente ou Cancelar para sair.");
    
    if(continuar){
        entrada = prompt("Digite um número:");
    }
}

if(entrada && entrada.trim()){
    let numero = Number(entrada);
    if(numero > 15){
        alert("Número maior que quinze.");
    }
    else if(numero < 15){
        alert("Número menor que quinze.");
    }
    else if(numero === 15){
        alert("Número igual a quinze.");
    }
    else{
        alert("Valor inválido.");
    }
}
else{
    alert("Nenhum valor digitado.");
}*/

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