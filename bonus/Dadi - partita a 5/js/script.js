// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Creo il numero random per utente e computer
// const userNumber = Math.floor(Math.random() * 6) + 1;
// const computerNumber = Math.floor(Math.random() * 6) + 1;

// Imposto la logica della vittoria/sconfitta/pareggio dell'utente col relativo output
// if(userNumber > computerNumber){
//     alert(`Hai vinto (Tu: ${userNumber}, Computer: ${computerNumber})`);
// } else if(userNumber < computerNumber){
//     alert(`Hai perso (Tu: ${userNumber}, Computer: ${computerNumber})`);
// } else{
//     alert(`Hai pareggiato (Tu: ${userNumber}, Computer: ${computerNumber})`);
// }

// Variabili per apertura/chiusura sezione Regole e Main
const pageHeader = document.querySelector('header');
const pageMain = document.querySelector('main');
const rulesButton = document.querySelector('.rules_button');

// SEZIONE RULES
rulesButton.addEventListener('click', function(){
    // Dichiarazione variabili per sezione Rules e pulsante di chiusura
    const rulesSection = document.querySelector('.rules_wrapper');
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



