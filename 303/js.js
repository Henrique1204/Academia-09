/*
Explicação dos For's
let limite = 10;
let i= 0;

while(i < limite){
    codigo
    codigo
    codigo
    codigo
    
    i++
}

for(let i = 0; i < limite; i++){
    codigo
    codigo
    codigo
    codigo
}

let continuar = true;

while(continuar){
    continuar = confirm("Quer continuar?")
}

//For é while. For in é pra percorrer índices de uma lista.

let nomes = ["PAULO", "PEDRO"];
let usuario ={
    NOME: "Zé",
    IDADE: "46",
    VIVO: true
}

for(let i in nomes){
    console.log(nomes[i]);
}

//For in também pode ser usado para percorrer as chaves de um objeto.

for(let chave in usuario){
    console.log(`O valor da chave ${chave} é: ${usuario[chave]}`);
}

//For off percorre todos os valores de uma lista.
for(let nome of nomes){
    console.log(nome);
}

//Percorrendo um objeto? for in.
//Percorrendo uma lista? com regras for. sem regras com for in.
//fazer laços? simples for. complicado while.
//Pèrcorrer lista se preocupando só com o os valores? for of. 

*/
// function + nome para chamar seu nuemro + argumento que será usado como variavel dentro da função.
function potencia(x,y){
    //dentro da função você coloca o codigo que quer ser repetido.
    let resultado =x**y;
    //return é o que sua função manda como resposta para a cahamada.
    return resultado;
}
function soma(x,y){
    return x+y;
}

let confirmacao = true;

confirmacao = confirm("Vamos calcular?");

while(confirmacao == true){
    let conta = prompt("Você quer somar ou fazer potência?");

    if(conta.trim() == "potência" || conta.trim() == "potencia"){
        // Você chama a função digitando o nome que você definiu no começo da função + () com o nome do argumento, o argumento pode ser definido por você na hora da chamada e a função será feita com base do argumento que você definiu.
        let numero1 = Number(prompt("Qual o número será a base?"));
        let numero2 = Number(prompt("Qual o número que será usado como coeficiente?"));
        alert(potencia(numero1,numero2));
    }
    else if(conta == "somar"){
        let numero1 = Number(prompt("Qual o primeiro número?"));
        let numero2 = Number(prompt("Qual o segundo número?"));
        alert(soma(numero1,numero2));
    }
    else{
        alert("você não digitou algo válido");
    }
    confirmacao = confirm("Vamos outra vez?");
}

function validar(entrada, limiteInferior, limiteSuperior){
    if(!limiteInferior){
        limiteInterior = -Infinity;
    }
    if(!limiteSperior){
        limiteSuperior = -Infinity;
    }
    if(entrada && entrada.trim() && !isNaN(Number(entrada)) && Number(entrada) > limiteInferior && Number(entrada) < limiteSuperior){
        return true;
    }
    return false;
}