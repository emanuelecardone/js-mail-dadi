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
    let userNumber = Math.floor(Math.random() * 10) + 1;
    let player2Number = Math.floor(Math.random() * 10) + 1;
    let player3Number = Math.floor(Math.random() * 10) + 1;
    let player4Number = Math.floor(Math.random() * 10) + 1;
    let player5Number = Math.floor(Math.random() * 10) + 1;
    const numbersList = [userNumber, player2Number, player3Number, player4Number, player5Number];
    console.log(numbersList);

    // Questa variabile flag mi servirà per dopo, ma la metto ora in quanto dopo modifico i numeri
    let userWins = false;
    if(userNumber === Math.max(userNumber, player2Number, player3Number, player4Number, player5Number)){
        userWins = true;
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

        const userName = `Tu:`;
        const player2Name = `Giocatore 2:`;
        const player3Name = `Giocatore 3:`;
        const player4Name = `Giocatore 4:`;
        const player5Name = `Giocatore 5:`;
        let currentName;

        // Variabile per la row
        const mainRow = document.querySelector('.leaderboard_row');

        let currentPlayer = leaderboard[i];

        // Aumento ogni volta il numero assegnato a ciascuno di 20 se lo trova uguale, 
        // in modo da non farglielo ritrovare uguale una seconda volta e non riassegnare 
        // lo stesso nome una seconda volta se 2 o più numeri sono uguali
        if(currentPlayer === userNumber){
            currentName = userName;
            userNumber += 20;
        } else if(currentPlayer === player2Number){
            currentName = player2Name;
            player2Number += 20;
        } else if(currentPlayer === player3Number){
            currentName = player3Name;
            player3Number += 20;
        } else if(currentPlayer === player4Number){
            currentName = player4Name;
            player4Number += 20;
        } else{
            currentName = player5Name;
            player5Number += 20;
        }

        mainRow.innerHTML += `<div class="col-12"><div class="d-flex justify-content-center align-items-center text-light fw-bold mb-3">${currentName} <span class="ms-4">${currentPlayer}</span></div></div>`;
    }

    if(userWins){
        document.querySelector('.results_title').innerHTML = `Hai vinto <i class="fas fa-smile-wink text-light"></i>`;
    } else{
        document.querySelector('.results_title').innerHTML = `Hai perso <i class="fas fa-sad-tear text-light"></i>`;
    }
});



