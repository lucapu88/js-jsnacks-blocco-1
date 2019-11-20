// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
var numero = prompt('digita un numero di 4 cifre');
var numeri = [];
numeri.push(numero);
console.log(numeri);
numero = numero.split('');
console.log(numero);
numeri.sum();
console.log(numeri);
