/* ESERCIZIO PARI E DISPARI
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.
*/


// Prompt -> chiedi all'utente di scegliere tra pari e dispari
const utentePariDispari = prompt("Scegli: scrivi PARI o DISPARI").toLowerCase();
// Console: mostra scelta pari/dispari dell'utente
console.log(`L'utente ha scelto: ${utentePariDispari.toLowerCase()}`);

// Prompt -> chiedi all'utente di scegliere un numero tra 1 e 5
const utenteNumero = parseInt(prompt("Scegli: scrivi un numero tra 1 e 5"));
// Console: mostra scelta (1-5) dell'utente
console.log(`L'utente ha scelto: ${utenteNumero}`);

// Function -> genera numero random tra 1 e 5 per il pc
function numeroRandomTot(minNum = 1, maxNum = 10) {

    const numeroRandom = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

    return numeroRandom;
}

// Function -> Controlla se è divisibile per 2 senza resto.
function pariDispari(numeroPariDispari) {

    if (numeroPariDispari % 2 === 0) {
        // se la condizione torna TRUE il risultato è "pari"
        return "pari";
    } else {
        // altrimenti torna FALSE quindi è "dispari"
        return "dispari";
    }
}

const pcNumero = numeroRandomTot(1, 5);
// Console: mostra il numero generato dal pc
console.log(`Il numero scelto dal pc è: ${pcNumero}`);
// Alert: mostra il numero generato dal pc
alert(`Il numero scelto dal pc è: ${pcNumero}`);

// Creo la variabile che somma il numero dell'utente con quello generato dal pc
const sommaNumeri = utenteNumero + pcNumero;
// Console: mostra la somma
console.log(`I numeri sommati fanno: ${sommaNumeri}`);


// Creo la variabile che mi darà l'esito pari o dispari
const esitoPariDispari = pariDispari(sommaNumeri);

// Creo la variabile vuota per l'alert differente da mostrare all'utente
let alertUtente = "";

if (esitoPariDispari === utentePariDispari) {
    // se il confronto da TRUE l'utente ha vinto e mostra il risultato in console
    alertUtente = `HAI VINTO ! La somma dei numeri è ${sommaNumeri}. Il numero è ${esitoPariDispari}`;
    console.log(alertUtente);

} else {
    // altrimenti ha perso e mostra il risultato in console
    alertUtente = `HAI PERSO ! La somma dei numeri è ${sommaNumeri}. Il numero è ${esitoPariDispari}`;
    console.log(alertUtente);
}

// Alert: mostra il risultato all'utente
alert(alertUtente);