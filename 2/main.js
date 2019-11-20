// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt('inserisci una parola');
console.log(parola1);
var parola2 = prompt("inserisci un'altra parola");
console.log(parola2);

if (parola1.length == parola2.length) {
  console.log('le 2 parole sono uguali');
} else if (parola1.length > parola2.length) {
  console.log('la parola più lunga è: ' + parola1);
} else {
  console.log('la parola più lunga è: ' + parola2);
}
