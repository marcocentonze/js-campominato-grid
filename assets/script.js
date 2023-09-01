/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Consigli del giorno: 
-Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
-Di cosa ho bisogno per generare i numeri?
-Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
-Le validazioni e i controlli possiamo farli anche in un secondo momento. */

//definiamo la funzione per generare la griglia
function generateField(domElement, limit) {
  // Genero la griglia in pagina
  for (let i = 0; i < limit; i++) {
    //creo un elemento nel markup per rappresentare la singoal cella
    const cellElement = document.createElement("div");
    //aggiungo la classe "cell" e poi stampo in pagina
    cellElement.className = "cell";
    cellElement.append(i + 1);
    domElement.append(cellElement);
  }
}
//aggiungo eventolistener quando clicco sulla cella per cambiare colore

//funzione per avviare il gioco

//evento listener
