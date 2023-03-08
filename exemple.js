//déclaration d'une fonction pour lancer la partie
function justePrix () { 
    const rightPrice = Math.floor(Math.random() * 100) + 1; //génération d'un nombre secret aléatoire entre un et 100
    let userName = prompt("Quelle est votre nom ?"); //demander le nom de l'utilisateur
   /*  let userChoice = parseInt(prompt("Choisissez un nombre entre un et 100")); //demander à l'utilisateur un nombre */
    let userChoice = askUserChoice();
    let count = 1; //déclarer une variable pour le nombre de tentatives

    while (userChoice != rightPrice) {
        if (userChoice < rightPrice) {
            count++;
            userChoice = prompt("C'est plus, quel est votre nouveau choix?");            
        }
        else {
            count++;
            userChoice = prompt("C'est moins, quel est votre nouveau choix?");            
        }
    }

    alert(`Bravo, ${userName} gagne en ${count} essai(s) ! Le nombre à trouver était ${rightPrice}`);    

    replay();
}

//déclaration d'une fonction pour savoir si l'utilisateur souhaite rejour
function replay () {
    let userReplay = prompt("Voulez vous rejouer ? (oui / non)"); //message demandant à l'utilisateur si il veut rejouer
    if (userReplay === "oui") {
        return justePrix(); //appel de la fonction startGame pour lancer une partie
    }
    else if (userReplay === "non") {
        return alert("Dommage, tu aurais pu essayer de faire mieux");
    }
    else {
        alert("Choix non valide. "); //si userRaplay n'est ni "oui", ni "non"
        return replay(); //appel de la fonction replay
    }
}

//déclarer une fonction pour vérifier si le choix de l'utilisateur est bien un entier
function askUserChoice () {
    let userNumber = prompt("Choisissez un nombre entre un et 100");
    if (!Number.isInteger(userNumber)) {
        alert("Choix invalide");
        return askUserChoice();
    }
    else {
        return userNumber;
    }
}

justePrix(); //appel de la fonction pour lancer la partie