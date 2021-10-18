/* ESERCIZIO PAROLA PALINDROMA
- Chiedere all’utente di inserire una parola.
- Creare una funzione per capire se la parola inserita è Palindroma = se rovesciata resta uguale (es. "otto").
*/

/*****************************   HUMAN-CODE    **************************************** 
 * 1) Divido la parola in caratteri e li ordino ognuno con un "indice" da 0 a X (.split) 
 * 2) Rovescio l'ordine dei caratteri -> (da X a 0) (.reverse)
 * 3) Devo ricollegare i due "ordini" per capire se non sono cambiati i caratteri (.join)
 * 4) Crea il confronto dei due "ordini" (if !==)
 * 5) Mostra se il risultato è uguale o diverso (alert: true/false)
 * */

// Chiedo la parola all'utente con un prompt
let parolaUtente = prompt("Inserisci una parola");

// Console: mostra la parola inserita dall'utente
console.log(`La parola inserita dall'utente è: ${parolaUtente}`);

// Console: mostra il numero di caratteri della parola inserita dall'utente
console.log(`La parola inserita dall'utente è formata da ${parolaUtente.length} caratteri`);

// Funzione: una parola è Palindroma se rovesciando l'ordine delle lettere da lo stesso risultato
function paliYes(parolaUtente) {

    // (1).split("") -> Crea un Array dividendo e ordinando ogni carattere della parola inserita dall'utente 
    lettereParolaUtente = parolaUtente.split("");
    // Console: mostra l'array con la parola divisa
    console.log(lettereParolaUtente);

    // (2).reverse() -> Crea un nuovo Array rovesciando l'ordine dei caratteri 
    lettereParolaUtenteReverse = lettereParolaUtente.reverse();
    // Console: mostra il nuovo array con la parola divisa rovesciata
    console.log(lettereParolaUtenteReverse);

    // (3).join("") -> Ricollego le lettere rovesciate della parola in una nuova STRING (contrario di .split("")) 
    parolaUtenteReverse = lettereParolaUtenteReverse.join("");
    // Console: mostra la parola inserita dall'utente al contrario
    console.log(`La parola inserita dall'utente rovesciata è: ${parolaUtenteReverse}`);

    // Dichiaro la Variabile parolaPali come TRUE per verificare la condizione 
    let parolaPali = true;
    
    // (4)if -> Condizione: la parola inserita dall'utente è uguale alla stessa parola rovesciata ?
    if (parolaUtente != parolaUtenteReverse) {   
        // Se la parola inserita dall'utente non è uguale alla stessa parola rovesciata -> FALSE 
        parolaPali = false;
    }
    // (5) Console: mostra il risultato della condizione
    console.log(`La parola ${parolaUtente} è Palindroma ? ${parolaPali}`);

    // termino la Funzione restituendo il valore TRUE (palindroma) o FALSE(non palindroma)
    return parolaPali;

}

// Alert: mostra il risultato all'utente
alert(`La parola ${parolaUtente} è Palindroma ? ${parolaUtente = paliYes(parolaUtente)}`);


