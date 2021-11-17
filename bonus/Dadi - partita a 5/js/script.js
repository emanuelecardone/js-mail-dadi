// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


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

    // Creo la classifica (ogni volta che trova il numero più alto lo rimuove dalla lista e lo aggiunge alla classifica. Così sarò sicuro di avere i numeri in ordine decrescente)
    const leaderboard = [];

    // Primo classificato
    for(let i = 0; i < 5; i++){
        
        let currentPlayer = numbersList[i];

        if(currentPlayer === Math.max.apply(null, numbersList)){
            console.log(currentPlayer);
            leaderboard.push(currentPlayer);
            numbersList.splice(i, 1);
        }
    }
    // Secondo classificato
    for(let i = 0; i < 4; i++){
        
        let currentPlayer = numbersList[i];

        if(currentPlayer === Math.max.apply(null, numbersList)){
            console.log(currentPlayer);
            leaderboard.push(currentPlayer);
            numbersList.splice(i, 1);
        }
    }
    // Terzo classificato
    for(let i = 0; i < 3; i++){
        
        let currentPlayer = numbersList[i];

        if(currentPlayer === Math.max.apply(null, numbersList)){
            console.log(currentPlayer);
            leaderboard.push(currentPlayer);
            numbersList.splice(i, 1);
        }
    }
    // Quarto classificato
    for(let i = 0; i < 2; i++){
        
        let currentPlayer = numbersList[i];

        if(currentPlayer === Math.max.apply(null, numbersList)){
            console.log(currentPlayer);
            leaderboard.push(currentPlayer);
            numbersList.splice(i, 1);
        }
    }
    // Quinto classificato ( se non l'ha già fatto il 4 for, lo aggiungo io)
    if(leaderboard.length !== 5){
        leaderboard.push(numbersList[0]);
    }
    
    console.log(numbersList);
    console.log(leaderboard);

    // LAYOUT CLASSIFICA

    for(let i = 0; i < leaderboard.length; i++){
        // Variabile per la row
        const mainRow = document.querySelector('.leaderboard_row');

        const currentPlayer = leaderboard[i];

        mainRow.innerHTML += `<div class="col-12"><div class="d-flex justify-content-center align-items-center text-light fw-bold">${currentPlayer}</div></div>`;
    }
});



