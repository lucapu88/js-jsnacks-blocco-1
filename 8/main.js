// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
var numero = prompt('digita un numero di 4 cifre');

somma = 0;
for (var i = 0; i < numero.length; i++) {
  somma = parseInt(somma) + parseInt(numero[i]);
}
  console.log(somma);

  //ESERCIZIO JSNACKS-9 QUI SOTTO:
  //L'HO INSERITO QUI POICHè NON MI HA CARICATO LA CARTELLA N.9 IN GITHUB
  // Calcola la somma e la media dei primi 10 numeri.

  somma = 0;
  for (var i = 1; i <= 10; i++) {
    somma = somma + i;
    console.log(i);
  }
  console.log('la somma è: ' + somma);

  media = 0;
  for (var i = 1; i <= 10; i++) {
    media = media + i / 10;
    console.log(i);
  }
  console.log('la media è: ' + media);

  // L'HO PUSHATO MA NON SONO SICURO CHE SIA GIUSTO...
  //CI HO MESSO TROPPO POCO TEMPO E SECONDO ME C'E' QUALCOSA CHE NON QUADRA! XD
