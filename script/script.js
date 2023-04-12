function line(){
    document.getElementById("line").style.textDecoration="none";
}
function ln(){
    document.getElementById("line").style.textDecoration="underline  #42ffa0 3px"; 
}

function buttn(){
    document.getElementById("bn").style.backgroundColor= "#250225";
    document.getElementById("bn").style.borderColor="black";
    document.getElementById("bn").style.color="white";
    
}
function btn(){
    document.getElementById("bn").style.backgroundColor= "#42ffa0";
    document.getElementById("bn").style.borderColor="#42ffa0";
    document.getElementById("bn").style.color="black";

}
function hoover(){
    document.getElementById("b").style.backgroundColor= "#250225";
    document.getElementById("b").style.borderColor="black";
    document.getElementById("b").style.color="white";

}
function hvr(){
    document.getElementById("b").style.backgroundColor= "#42ffa0";
    document.getElementById("b").style.borderColor="#42ffa0";
    document.getElementById("b").style.color="black";


}
 let cd = document.getElementById("crd");
 function visibleCard(){
    cd.style.display="block";
 }

 function newPic(){
    this.setAttribute("src","../images/pexels-pixabay-220182.jpg");

 }
 function npic(){
    this.setAttribute("src","https://azganoth.github.io/workit-landing-page/assets/images/image-founder.webp");

 }