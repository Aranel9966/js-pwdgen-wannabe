/*
-creo una variabile per ogni dato
    *nome
    *cognome
    *colore
    *numero
-chiedi i dati all'utente 
-scrivi sul documento
*/

let userName=prompt('Qualè il tuo nome?');
let userSurname=prompt('Qualè il tuo cognome?');
let prefererColor=prompt('Qualè il tuo colore preferito?');
const randomNumber=24;

//test in consol
console.log(userName);
console.log(userSurname);
console.log(prefererColor);

//stampa sul documento
document.writeln(`
Benvenuto ${userName} ${userSurname} ;<br>
Colore scelto ${prefererColor} ;<br>
Numero assegnato ${randomNumber} ;<br>
`)

