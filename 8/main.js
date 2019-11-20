// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
var numero = prompt('digita un numero di 4 cifre');

somma = 0;
for (var i = 0; i < numero.length; i++) {
  somma = parseInt(somma) + parseInt(numero[i]);
  
}
  console.log(somma);
// var numeri = [];
// numeri.push(numero);
// console.log(numeri);
// numero = numero.split('');
// console.log(numero);
//
//
// function myFunc(total, num) {
//   return total + num;
// }
// console.log(numeri.reduce(myFunc));
