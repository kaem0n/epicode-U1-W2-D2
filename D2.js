console.log('Esercizi JS U1-W2-D2 - https://github.com/kaem0n/epicode-U1-W2-D2')

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 2
let num2 = 66
if (num1 > num2) {
  console.log('1) ' + num1 + ' è maggiore di ' + num2)
} else {
  console.log('1) ' + num2 + ' è maggiore di ' + num1)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 5
if (num3 !== 5) {
  console.log('2) Il valore non è corretto.')
} else {
  console.log('2) Il valore è corretto:', num3)
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = 15
if (num4 % 5) {
  console.log('3) ' + num4 + ' NON è divisibile per 5.')
} else {
  console.log('3) ' + num4 + ' è divisibile per 5.')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 6
let num6 = 8
if (num5 - num6 === 8 || num5 + num6 === 8 || num5 === 8 || num6 === 8) {
  console.log('4) Tra i dati è presente un 8.')
} else {
  console.log('4) Tra i dati NON è presente un 8.')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = 20
let shipping
let totalShoppingCart
if (shoppingCart >= 50) {
  shipping = 0
  totalShoppingCart = shoppingCart + shipping
  console.log('5) Totale da pagare:', totalShoppingCart)
} else {
  shipping = 10
  totalShoppingCart = shoppingCart + shipping
  console.log('5) Totale da pagare:', totalShoppingCart)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Non riscrivo tutto, continuo il codice dell'esercizio 5 direttamente qui aggiungendo:
let blackFriday = '20% di sconto'
if (blackFriday) {
  totalShoppingCart = totalShoppingCart - (totalShoppingCart * 20) / 100;
  console.log('6) Totale da pagare: ' + totalShoppingCart + ' (sconto Black Friday del 20% applicato)')
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num7 = 11
let num8 = 12
let num9 = 18
if (num7 < num8 && num8 < num9) {
  console.log('7) La lista è ordinata:', num9, num8, num7)
} else {
  console.log('7) La lista NON è ordinata.')
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value = 123
if (typeof value === "number") {
  console.log('8) Congratulazioni, il valore inserito è un numero.')
} else {
  console.log('8) Il valore inserito non è un numero. Ritenta.')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num10 = 47
if (num10 % 2) {
  console.log('9) ' + num10 + ' è dispari.')
} else {
  console.log('9) ' + num10 + ' è pari.')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 5) {
  console.log("10) Meno di 5");
} else if (val < 10) {
    console.log("10) Meno di 10");
  } else {
    console.log("10) Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto'
console.log('11) Oggetto "me" aggiornato:', me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log('12) Oggetto "me" aggiornato:', me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log('13) Oggetto "me" aggiornato:', me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array = []
console.log('14a) Nuovo array creato:', array)
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log('14b) Nuovo array aggiornato:', array)

/* ESERCIZIO 15
Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.splice(9, 1, 100)
console.log('15) Nuovo array aggiornato:', array)