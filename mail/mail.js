// chiedi all'utente la sua mail
var mailUtente = prompt("inserisci la tua mail");
console.log("Mail Utente: " + mailUtente);
// crea una mail list
var mailList = ["leonardo@gamail.com", "andrea@gamail.com", "marco@gamail.com"]
console.log("Mail Array: " + mailList)
// verifica che la mail inserita dall'utente sia tra le mail inserite nella mail list
for (var i = 0; i < mailList.lenght; i++) {
  console.log(mailList[i]);
}
// stampa un messaggio appropriato in base all'email inserita
if (mailList[i] == mailUtente) {
  alert("sei nella lista")
}else {
  alert("non sei nella lista")
}
