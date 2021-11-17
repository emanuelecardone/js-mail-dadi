// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creo la mia lista di email che hanno l'accesso
const allowedEmailList = ['emanuele@gmail.com', 'sara@gmail.com', 'alessandri@gmail.com', 'mattia@gmail.com', 'martina@gmail.com', 'maria@gmail.com', 'alex@gmail.com', 'pietro@gmail.com', 'flavia@gmail.com', 'leonardo@gmail.com'];

// Al click di "Invia"
const submitButton = document.querySelector('.submit_button');

submitButton.addEventListener('click', function(){

    // Variabile email
    const userEmail = document.querySelector('.email_form').value;
    
    // Controllo stringa vuota o nulla
    if(!(userEmail === '')){

        // Creo una variabile per il container della riga e per il container della form così da aggiungere/rimuovere il display none
        const emailWrapper = document.querySelector('.email_wrapper');
        const formWrapper = document.querySelector('.form_wrapper');
        emailWrapper.classList.remove('d-none');
        formWrapper.classList.add('d-none');
        
        // Creo una variabile flag per controllare se l'email è presente nella lista
        let emailPresence = false;

        // Controllo se l'email è presente
        for(i = 0; i < allowedEmailList.length; i++){

            currentEmail = allowedEmailList[i];

            // Creo un layout grafico con la lista delle email riempiendo la riga che dichiaro qui sotto come variabile
            const mainRow = document.querySelector('.row');
            
            if(userEmail === currentEmail){
                emailPresence = true;
                // Il colore dell'email corrispondente diventerà verde e grassetto se è presente nella lista
                mainRow.innerHTML += `<div class="col-12"><div class="d-flex justify-content-center align-items-center py-4"><span class="border-bottom border-4 border-success p-2 text-success fw-bold">${currentEmail}</span></div></div>`;
            } else{
                mainRow.innerHTML += `<div class="col-12"><div class="d-flex justify-content-center align-items-center py-4"><span class="border-bottom border-2 border-dark p-2">${currentEmail}</span></div></div>`;
            }
        }

        // Output finale
        const finalMessage = document.getElementById('result_message');
        if(emailPresence){
            finalMessage.classList.add('text-primary');
            finalMessage.innerHTML = `${userEmail} è presente nella lista di quelle che hanno accesso`
        } else{
            finalMessage.classList.add('text-danger');
            finalMessage.innerHTML = `${userEmail} non è presente nella lista di quelle che hanno accesso`
        }

    } else{

        alert(`Non puoi inserire un testo vuoto`);

    } 
});


 






