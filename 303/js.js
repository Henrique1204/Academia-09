/*
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

*/

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