// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Imposto la logica della vittoria/sconfitta/pareggio dell'utente col relativo output
// if(userNumber > computerNumber){
//     alert(`Hai vinto (Tu: ${userNumber}, Computer: ${computerNumber})`);
// } else if(userNumber < computerNumber){
//     alert(`Hai perso (Tu: ${userNumber}, Computer: ${computerNumber})`);
// } else{
//     alert(`Hai pareggiato (Tu: ${userNumber}, Computer: ${computerNumber})`);
// }

// Variabili per apertura/chiusura sezione Regole, Gioco e Main
const pageHeader = document.querySelector('header');
const pageMain = document.querySelector('main');
const rulesButton = document.querySelector('.rules_button');
const startButton = document.querySelector('.start_button');
const rulesSection = document.querySelector('.rules_wrapper');

// SEZIONE RULES
rulesButton.addEventListener('click', function(){
    // Dichiarazione variabili per pulsante di chiusura (la sezione rules la dichiaro prima perché mi servirà anche dopo)
    const rulesCloseButton = document.querySelector('.rules_close_button');

    // Apertura
    pageMain.classList.remove('d-none');
    rulesSection.classList.remove('d-none');

    // Chiusura
    rulesCloseButton.addEventListener('click', function(){
        pageMain.classList.add('d-none');
        rulesSection.classList.add('d-none');
    });
});

// SEZIONE GAME
startButton.addEventListener('click', function(){
    // Dichiarazione variabile sezione Game
    const gameSection = document.querySelector('.game_wrapper');

    // Apertura
    pageHeader.classList.add('d-none');
    pageMain.classList.remove('d-none');
    rulesSection.classList.add('d-none');
    gameSection.classList.remove('d-none');

    // Creo il numero random per utente e computer (mi serve un array per fare dei controlli sul vincitore)
    const userNumber = Math.floor(Math.random() * 10) + 1;
    const player2Number = Math.floor(Math.random() * 10) + 1;
    const player3Number = Math.floor(Math.random() * 10) + 1;
    const player4Number = Math.floor(Math.random() * 10) + 1;
    const player5Number = Math.floor(Math.random() * 10) + 1;
    const numbersList = [userNumber, player2Number, player3Number, player4Number, player5Number];
    console.log(numbersList);


    if(userNumber === Math.max(userNumber, player2Number, player3Number, player4Number, player5Number)){
        console.log('hai vinto');
    }

    // Variabile per la row
     const mainRow = document.querySelector('.row');

    // Creo la classifica
    const leaderboard = [];
    for(i = 0; i < 5; i++){
        
        let currentPlayer = numbersList[i];

        if(currentPlayer === Math.max(userNumber, player2Number, player3Number, player4Number, player5Number)){
            console.log(currentPlayer);
            leaderboard.push(currentPlayer);
            numbersList.splice(i, 1);
        }
    }
    console.log(numbersList);
    console.log(leaderboard);
});



