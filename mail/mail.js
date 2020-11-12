// chiedi all'utente la sua mail
var mailUtente = prompt("LA TUA MAIL");
console.log(mailUtente);
// crea una mail list
var listaMail = ['mail1@gmail.com', 'mail2@gmail.com', 'mail3@gmail.com']
console.log(listaMail);
// verifica che la mail inserita dall'utente sia tra le mail inserite nella mail list
for (var i = 0; i < listaMail.length; i++) {
  console.log(listaMail[i]);
  if (listaMail == mailUtente) {
    var result = true;
  }else {
    result = false;
  }
  console.log(result);
}
if (result == true) {
  alert('sei nella lista');
}else {
  alert('non sei nella lista');
}
// stampa un messaggio appropriato in base all'email inserita
