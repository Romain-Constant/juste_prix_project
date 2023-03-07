


function startGame () {

    function justePrix (goodPrice, userPrice) {
        if (userPrice < goodPrice) {
            count++
            userChoice = prompt("C'est plus, quel est votre nouveau choix?");
            return justePrix(rightPrice, userChoice);
        }
        else if (userPrice > goodPrice) {
            count++
            userChoice = prompt("C'est moins, quel est votre nouveau choix?");
            return justePrix(rightPrice, userChoice);
        }
        else {
            count++
            alert(`Bravo, ${userName} gagne en ${count} essai(s) !`);
            return replay();
        }

    } 

    function replay () {
        let userReplay = prompt("Voulez vous rejouer ? (oui / non)"); 
        if (userReplay === "oui") {
            return startGame();        
        }
        else if (userReplay === "non") {
            return alert("Dommage, tu aurais pu essayer de faire mieux");
        }
        else {
            alert("Choix non valide. ");
            return replay();
        }
    }

    const rightPrice = Math.floor(Math.random() * 100) + 1;
    let userName = prompt("Quelle est votre nom ?");
    let userChoice = prompt("Choisissez un nombre entre un et 100");
    let count = 0;

    justePrix(rightPrice, userChoice);
}

startGame();




