//jSnack 6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var numero = parseInt(prompt('inserisci un numero'));
for (var i = 0; i < numero ; i++) {
  var cubo = i * i * i;
  console.log(cubo);
}
