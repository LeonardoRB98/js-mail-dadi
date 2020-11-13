// chiedi all'utente la sua mail
var mailUtente = prompt('inserisci la tua mail');
console.log(mailUtente);
// crea una mail list
var listaMail = ['mail1@gmail.com', 'mail2@gmail.com', 'mail3@gmail.com'];
console.log(listaMail);
// verifica che la mail inserita dall'utente sia tra le mail inserite nella mail list
var result = false;
for (var i = 0; i < listaMail.length; i++) {
  if (mailUtente === listaMail[i]) {
    result = true;
    console.log(mailUtente === listaMail[i]);
  }else {
    console.log(mailUtente === listaMail[i]);
  }
}
if (result == true) {
  alert('sei nella lista');
}else {
  alert('non sei nella lista');
}
// stampa un messaggio appropriato in base all'email inserita
