function aleatorio(menor,maior){ 
    numPossibilidades = maior-menor; 
    aleat = Math.random() * numPossibilidades;
    aleat = Math.floor(aleat);
    return parseInt(menor) + aleat ;
} 

var c=0;
texto ="す。また、オンライ";
//texto = prompt ("Texto");
var l = texto.split("");


function cria(){
if(altura==0){
 altura=300;
}
 var tfont = aleatorio(10,30);
 var left = aleatorio(0,largura-tfont);

 for(contp=0;contp<l.length;contp++){
     c++;
     var top = -contp*tfont;
     var n = "c"+c+contp;
     var divTag = document.createElement ("div"); 
                     if(contp==0){divTag.style.color="#FFF"}
                     divTag.style.fontSize = tfont+"px";
                     divTag.style.top=top+"px";
                     divTag.style.left=left+"px";
                     divTag.className = "letra";
                     divTag.id = n;
                 
                     document.body.appendChild(divTag);
     
     cai(n,top,contp,tfont);
 }
}




function cai(nome,top,cx,tfont){
 var ct=top;
 
 
 var tempo = window.setInterval(function(){
     document.getElementById(nome).innerHTML = l[cx];
     cx++;
     if(cx == l.length){
     cx=0;
     }
     
 
     document.getElementById(nome).style.top=ct+"px";
     ct=ct+tfont;
 
     if(ct>altura-tfont){	
         clearInterval(tempo);

         document.body.removeChild(document.getElementById(nome));
     }
     
 }, 100);
}


window.setInterval(function(){cria()},100);
