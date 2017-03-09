//REVISIONS
// Declarez une variable nommée "boucler" contenant true
var boucler = true

// Declarez un tableau members contenant Aida67, lapie002, anneserrano, Jennysmille, nunkabuk, RCosson, kaonb-ax, FerEmilie, crazychouwi, KiluaZoldyc, patatobeur, Sam11360, elo062, hermeline, Biciclet,
var members = ["Aida67","lapie002","anneserrano","Jennysmille","nunkabuk","RCosson","kaonb-ax","FerEmilie","crazychouwi","KiluaZoldyc","patatobeur","Sam11360","elo062","hermeline","Biciclet"]
// SI la variable boucler vaut true ALORS
var check=document.getElementById("check");
check.addEventListener("click",function(){
if (boucler = true){

  // Bouclez sur le tableau que vous avez déclaré ci-dessus
for (var i = 0 ; i < members.length; i++ ){

  // Mettre un switch pour qu'au moment où la boucle se trouve sur votre pseudo cela ajoute "Affiche " devant votre pseudo dans la console et sur l'écran et par defaut seulement le pseudo des autres
switch (members[i]){
case "KiluaZoldyc":
var ecran=document.createElement("div");
var p=document.getElementById("check");
ecran.innerHTML="Affiche"+" "+"KiluaZoldyc";
p.appendChild(ecran);
console.log("Affiche"+" "+"KiluaZoldyc");
break;
default:
var ecran=document.createElement("div");
var p=document.getElementById("check");
ecran.innerHTML=members[i];
p.appendChild(ecran);


console.log(members[i]);
}
}
}	
})

// FIN REVISIONS

// COURS AJAX
  // AJAX Jquery .ajax() ou .get()
  // Faites une requete vers l'API REST de Github pour récupérer les informations de votre compte


// FIN COURS AJAX
