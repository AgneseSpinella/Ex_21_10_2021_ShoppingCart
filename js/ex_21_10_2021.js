/* Consegna 
Simuliamo un carrello della spesa.
Scrivere una funzione richiamabile dalla pagina html tramite l’inserimento di un pulsante(<button></button>)
che memorizzi all’interno di un array chiamato cart l’input di un prompt.
Sviluppare anche la logica che preveda un avviso all’utente se l’elemento inserito è già presente nell’array.
Di seguito la prima riga di codice javascript da inserire nel file js:
const cart = [];
Per svolgere l’esercizio documentatevi sull’uso dell’attributo onclick da inserire nel tag <button>
*/

const cart=[]

function buy () {
  let object= prompt("Digita un prodotto che vuoi acquistare")
  if (cart.indexOf(object) === -1) {
    cart.push(object);
 if (object === null) {
      alert("Ok! Clicca sul pulsante se cambi idea");
} else if (object === "") {
      alert("Ops! Non hai digitato nessun prodotto")
} else {
      (alert("Bene! Hai aggiunto un prodotto"));
}
} else if (cart.includes(object) == true && (object)!== null)
    alert("Hai già inserito questo articolo nel carrello!");
  console.log(cart)
}
