const tijolo = document.querySelector('.produto');
const botaoMenu = document.querySelector('header div');
const menuFlutuante = document.querySelector('#navegacao');
const barraDePesquisa = document.querySelector('input');

function alertar(){
    alert("Não clique aqui");
}

function controlarMenu(){
    if(menuFlutuante.style.display === "flex"){
        menuFlutuante.style.display = "";
    }
    else{
        menuFlutuante.style.display = "flex";
    }
}
function pesquisa(evento){
    if(evento.key === "Enter"){
        alert("ainda não funciona a pesquisa, volte outro dia (:");
        barraDePesquisa.value = ""; 
    }
}

botaoMenu.onclick = controlarMenu;
tijolo.onclick = alertar;
barraDePesquisa.onkeypress = pesquisa;