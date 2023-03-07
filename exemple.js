
// déclaration d'une fonction pour lancer la partie
function startGame () { 
    const rightPrice = Math.floor(Math.random() * 100) + 1; //génération d'un nombre secret aléatoire entre un et 100
    let userName = prompt("Quelle est votre nom ?"); //demander le nom de l'utilisateur
    let userChoice = prompt("Choisissez un nombre entre un et 100"); //demander à l'utilisateur un nombre
    let count = 0; //déclarer une variable pour le nombre de tentatives
    

    //déclaration d'une fonction qui compare le nombre donné par l'utilisateur et le nombre secret généré
    function justePrix (goodPrice, userPrice) { 
        if (userPrice < goodPrice) { 
            count++; //incrémentation du nombre de tentatives
            userChoice = prompt("C'est plus, quel est votre nouveau choix?"); //modifier la valeur de la variable userChoice en demandant à l'utilisateur un nouveau nombre
            return justePrix(rightPrice, userChoice); //appel de la fonction justePrix avec le nouveau choix utilisateur
        }
        else if (userPrice > goodPrice) {
            count++; //incrémentation du nombre de tentatives
            userChoice = prompt("C'est moins, quel est votre nouveau choix?"); //modifier la valeur de la variable userChoice en demandant à l'utilisateur un nouveau nombre
            return justePrix(rightPrice, userChoice); //appel de la fonction justePrix avec le nouveau choix utilisateur
        }
        else {
            count++; //incrémentation du nombre de tentatives
            alert(`Bravo, ${userName} gagne en ${count} essai(s) ! Le nombre à trouver était ${rightPrice}`); //affichage du message de réussite avec le nom de l'utilisateur, le nombre de tentatives et le nombre qu'il fallait trouver
            return replay(); //appel de la fonction replay
        }
    } 

    //déclaration d'une fonction demandant à l'utilisateur si il veut rejour
    function replay () {
        let userReplay = prompt("Voulez vous rejouer ? (oui / non)"); //message demandant à l'utilisateur si il veut rejouer
        if (userReplay === "oui") {
            return startGame(); //appel de la fonction startGame pour lancer une partie
        }
        else if (userReplay === "non") {
            return alert("Dommage, tu aurais pu essayer de faire mieux");
        }
        else {
            alert("Choix non valide. "); //si userRaplay n'est ni "oui", ni "non"
            return replay(); //appel de la fonction replay
        }
    }

    

    justePrix(rightPrice, userChoice); //appel de la fonction justePrix
}

startGame(); //appel de la fonction startGame pour lancer une partie




