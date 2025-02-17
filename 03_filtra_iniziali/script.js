/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const initial = "A";


// Dichiara la funzione qui.
function onlyAs(namesAs) {
    return namesAs.filter(name => name.charAt(0).toUpperCase() === initial.toUpperCase());
}

// Invoca la funzione qui e stampa il risultato in console
console.log(onlyAs(names));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]