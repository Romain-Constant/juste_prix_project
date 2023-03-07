
const rightPrice = Math.floor(Math.random() * 100) + 1;

let userName = prompt("Quelle est votre nom ?");
let userChoice = prompt("Choisissez un nombre entre un et 100");

function justePrix (goodPrice, userPrice) {
    if (userPrice < goodPrice) {
        userChoice = prompt("C'est plus, quelles est votre nouveau choix?");
        return justePrix(rightPrice, userChoice);
    }
    else if (userPrice > goodPrice) {
        userChoice = prompt("C'est moins, quelles est votre nouveau choix?");
        return justePrix(rightPrice, userChoice);
    }
    else {
        return alert(`Bravo, ${userName} gagne !`)
    }

}

justePrix(rightPrice, userChoice);