// jSnack 5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var numeri_digitati = [];
for (var i = 1; i < 6; i++) {
  var numero = parseInt(prompt('inserisci un numero'));
  if (numero % 2 == 1) {
    numeri_digitati.push(numero);
    console.log(numeri_digitati);
  }
}
