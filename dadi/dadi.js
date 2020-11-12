// genera un numero casuale per il giocatore compresa tra 1 e 6
var playerNumber = Math.floor(Math.random() * 6) + 1;
console.log("player number " + playerNumber);
// genera un numeero casuale per il computer compresa tra 1 e 6
var computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("computer number " + computerNumber);
// confronta il numero del giocatore con quello del computer stabilisci quale dei due è maggiore
if (playerNumber > computerNumber) {
  // messaggio del vincitore
  alert("player win!");
} else {
  alert("computer win!");
}
