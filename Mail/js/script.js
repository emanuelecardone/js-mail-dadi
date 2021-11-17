// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creo la mia lista di email che hanno l'accesso
const allowedEmailList = ['emanuele@gmail.com', 'sara@gmail.com', 'alessandri@gmail.com', 'mattia@gmail.com', 'martina@gmail.com', 'maria@gmail.com', 'alex@gmail.com', 'pietro@gmail.com', 'flavia@gmail.com', 'leonardo@gmail.com'];

// Chiedo all'utente di inserire la sua email
const userEmail = prompt(`Per favore inserisci la tua e-mail`);

// Creo una variabile flag per controllare se l'email è presente nella lista
let emailPresence = false;

// Controllo se l'email è presente
for(let i = 0; i < allowedEmailList.length; i++){
    
    currentEmail = allowedEmailList[i];

    if(userEmail === currentEmail){
        emailPresence = true;
    }
}

// Output
if(emailPresence){
    alert(`La tua e-mail è presente nella lista di quelle che hanno accesso`);
} else{
    alert(`La tua e-mail non è presente nella lista di quelle che hanno accesso`);
}