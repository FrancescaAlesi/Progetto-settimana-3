# Progetto-settimana-3
creazione di una pagina web


# Pagine & Pellicola - Personal Media Tracker

Pagine & Pellicola  è una pagina web progettata per organizzare la propria collezione personale di intrattenimento. Permette di catalogare libri e film, eliminare contenuti dal catalogo e monitorare statistiche dettagliate sulle proprie abitudini di lettura e visione.

## Funzionalità Principali

- Navigazione: Filtra rapidamente l'intera libreria selezionando tra `Tutti`, `Libri`, `Film` e `Statistiche` nella parte superiore.
- Schede Dettaglio: Ogni card include titolo, anno, autore o regista, valutazione con stelle, categoria e note personali.
- Eliminazione Elementi: Possibilità di eliminare singole schede direttamente dal catalogo.
- Pannello Statistiche Laterale:
  - Conteggio totale di libri letti e film visti aggiornato in tempo reale ad ogni aggiunta o rimozione.
  - Calcolo e visualizzazione grafica della media dei voti.
- Aggiunta Nuovi Elementi: Modulo laterale per inserire titolo, autore/regista, anno, categoria (`Libri` o `Film`), visione(`Visto` o `Da vedere`) e lettura visione(`Letto` o `Da leggere`).
- Barra di Ricerca Diretta: Cerca all'istante all'interno del catalogo digitando il nome dell'opera o dell'autore.


## Stack Tecnologico

- HTML5:
  - Markup semantico (`<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, `<article>`).
  - Moduli interattivi con `<input>`, `<select>` e pulsanti accessibili.
- **CSS3:**
  - Impaginazione classica tramite Box Model, proprietà `display: inline-block`, `float`.
  - Effetti di transizione ed `hover` interattivi su schede, pulsanti e icone.
- JavaScript (ES6+):
  - Manipolazione dinamica del DOM (creazione, aggiornamento e rimozione di elementi tramite `remove()`).
  - Gestione dello stato dell'applicazione tramite array di oggetti.
  - Metodi per la ricerca, il filtraggio e l'eliminazione dei dati (`splice`, `filter`, `includes`).
  - Gestione degli eventi di input, click (inclusa la rimozione) e submit sui form.