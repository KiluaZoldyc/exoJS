// REVISIONS
// Declarez une variable nommée "boucler" contenant true
<<<<<<< HEAD
var boucler = true

// Declarez un tableau members contenant Aida67, lapie002, anneserrano, Jennysmille, nunkabuk, RCosson, kaonb-ax, FerEmilie, crazychouwi, KiluaZoldyc, patatobeur, Sam11360, elo062, hermeline, Biciclet,
var members = ["Aida67","lapie002","anneserrano","Jennysmille","nunkabuk","RCosson","kaonb-ax","FerEmilie","crazychouwi","KiluaZoldyc","patatobeur","Sam11360","elo062","hermeline","Biciclet"]
=======
//
//
// Declarez un tableau members contenant Aida67, lapie002, anneserrano, Jennysmille, nunkabuk, RCosson, kaonb-ax, FerEmilie, crazychouwi, KiluaZoldyc, patatobeur, Sam11360, elo062, hermeline, Biciclet,
//
>>>>>>> 26697ae42279b3c40455189642c0752911625fed
// SI la variable boucler vaut true ALORS
var check=document.getElementById("check");
check.addEventListener("click",function(){
if (boucler = true){

  // Bouclez sur le tableau que vous avez déclaré ci-dessus
<<<<<<< HEAD
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
=======
  // Mettre un switch pour qu'au moment où la boucle se trouve sur votre pseudo cela ajoute "Affiche " devant votre pseudo dans la console et sur l'écran et par defaut seulement le pseudo pour les autres
>>>>>>> 26697ae42279b3c40455189642c0752911625fed

// FIN REVISIONS
//
// COURS AJAX
// Faire une requete en ajax pour charger de façon asynchrone le html du fichier contenu.html

// COURS AJAX vers des API
  // AJAX Jquery .ajax() ou .getJSON()
  // Faites une requete vers l'API REST de Github pour récupérer les informations de votre compte et afficher le nombre de repositories que vous avez valeur de public_repos
// FIN COURS AJAX
