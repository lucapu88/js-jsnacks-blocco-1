// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

var numero1 = prompt('inserisci un numero');
console.log(numero1);
var numero2 = prompt('inserisci un altro numero');
console.log(numero2);

var maggiore = Math.max(numero1, numero2);
console.log(maggiore);

if (numero1 == numero2) {
  console.log('i numeri sono pari');
}
