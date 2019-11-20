// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.


var numeri_digitati = [];
for (var i = 0; i < 5; i++) {
  var numero = parseInt(prompt('inserisci un numero'));
  numeri_digitati.push(numero);
}
console.log(numeri_digitati);

// CON IL FOR
somma= 0;
for (var i = 0; i < numeri_digitati.length; i++) {
  somma= somma + numeri_digitati[i];
}
console.log(somma);

//CON IL WHILE
var contatore = 0;
somma = 0;
while (contatore < numeri_digitati.length) {
  somma= somma + numeri_digitati[contatore];
  contatore++
}
console.log(somma);
