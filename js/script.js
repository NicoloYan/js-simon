// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Creo un array vuoto che popolerò con i numeri dati dall'utente
let userNumbers = []

// Creo un array vuoto che popolerò con i numeri giusti dati dall'utente
let userCorrectNumbers = []

// Creo una variabile per il singolo numero dato dall'utente
let userNumber

// Genero array randomNumbers con 5 numeri casuali non ripetuti
let randomNumbers = []
numberGenerator(5, 1, 30)
console.log('Random numbers', randomNumbers)
// Alert che mostra randomNumbers
alert(randomNumbers)
// Dopo 30 secondi
const timeOut = setTimeout(numberChecker, 5000);
    // 5 prompt per l'utente chiedendo i numeri appena visualizzati.
    // Pushare i 5 numeri dati dall'utente in un array userNumbers
    // Scorro il contenuto di userNumbers e un numero alla volta verifico se sono contenuti in randomNumbers
    // Se randomNumbers.includes(userNumber)







// ----------
// FUNCTIONS
// ----------

// Function che genera 5 numeri random non ripetuti

function numberGenerator(numberOfElements, min, max) {
    while(randomNumbers.length < numberOfElements) {
     const randomNumber = getRndInteger(min, max);
     // Pusho il numero creato in bombsArray solo se non è già presente
     if(!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
     }
         
     }
 
     return randomNumbers;
 }

//  Funzione che genera numeri random tra min e max

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
function numberChecker() {
    
    for(let i = 0; i < 5; i++) {
        userNumber = parseInt(prompt('Dimmi i numeri che hai appena visto uno per volta'))
        userNumbers.push(userNumber)
        console.log('Numeri utente', userNumbers)
    }

    if (randomNumbers.includes(userNumber)) {
        userCorrectNumbers.push(userNumber)
    }
    console.log('Numeri giusti', userCorrectNumbers)
}


 // 5 prompt per l'utente chiedendo i numeri appena visualizzati.
    // Pushare i 5 numeri dati dall'utente in un array userNumbers
    // Scorro il contenuto di userNumbers e un numero alla volta verifico se sono contenuti in randomNumbers
    // Se randomNumbers.includes(userNumber)
