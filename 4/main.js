// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var nome = prompt('Ciao! inserisci il tuo nome');
console.log(nome);

var invitati = ['pippo', 'pluto', 'paperino', 'martufello', 'franco'];
console.log(invitati);

var nome_presente = false;
for (var i = 0; i < invitati.length; i++) {
  if (nome == invitati[i]) {
    nome_presente = true;
  }

}
if (nome_presente == true) {
  console.log('ok ci sei');
}else {
console.log('no non sei in lista');
}
