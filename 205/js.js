/*para acessar itens da lista, coloque o nome da lista, mais [] e o indice do elemento*/
/*para adicionar itens para lista existem 4 jeitos*/
/*nomedalistaPush = itens novos // nomedalista.length = iten novo // nomedalista[indice no qual quer adivonar] // nomedalista.unshift (itens novos)
/* unshift é apenas para adicionar itens ao começo*/
/* recomendado é usar unshift e push*/
/* gambiara para limpar vetores, coloca nomedalista.length = tamanho da lista que você quer, isso apaga os vetores apartir do tamanho que você definiu*/

/* confirm("Mensagem de confirm") //serve para confirmar algo, os resultado é dado me booleanos, "ok" = true e "cancelar"/esc = false*/

/*let idade= prompt("Qual sua idade?");
let salario= prompt("Quanto você ganha?");
let emprestimo= prompt("Quanto você que emprestado?");

if(((idade>=21 && idade<=55)&& salario>0) && emprestimo<=10*salario){
    alert("Você pode fazer o empréstimo");
}
else{
    alert("Você não pode fazer empréstimo");
}*/
/* `string ${variavel aqui}` serve para colocar variavel dentro da string */
/*.trim() serve para deixar as string obrigatóriamente começando com um caracter, desconsiderando o espaço*/

let nome = prompt("Digite aqui seu nome");

if(nome && nome.trim()){
    alert(`Olá! Seja bem vindo, ${nome}`);
}
else{
    alert("Bem vindo, Desconhecido");
}