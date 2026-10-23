# Progetto-settimana-3
creazione di una pagina web

# Pellicola - Web App
Pellicola è una web application interattiva e reattiva progettata per gestire la propria lista di film: consente di tenere traccia delle pellicole già viste e di quelle ancora da vedere, calcolando statistiche e percentuali di completamento in tempo reale.

## Funzionalità Principali
- Gestione Film:
  - Aggiunta di nuovi film con indicazione di titolo, regista, anno di uscita e stato iniziale (Visto / Da vedere).
  - Modifica rapida dello stato tramite checkbox interattivo direttamente dalla lista.
  - Rimozione selettiva dei singoli film dalla lista.
- Filtri e Ricerca in Tempo Reale:
  - Filtro per stato: `Tutti`, `Solo visti`, `Solo da vedere`.
  - Barra di ricerca istantanea per titolo o nome del regista.
  - Ordinamento dinamico per:
    - Anno di uscita (crescente e decrescente)
    - Titolo (A-Z e Z-A)
- Dashboard Statistiche:
  - Contatori aggiornati in tempo reale (film totali, film visti, film da vedere).
  - Barra di avanzamento dinamica con percentuale di completamento calcolata automaticamente.
- Dark Mode:
  - Cambio tema (Chiaro / Scuro) con salvataggio delle preferenze utente nel `localStorage` del browser.

## Stack Tecnologico
- HTML5: Struttura semantica dell'interfaccia (`header`, `main`, `section`, `footer`).
- CSS3: Stile personalizzato, layout fluido, gestione variabili tema (Light / Dark Mode) e animazioni CSS.
- JavaScript (ES6+):
  - Manipolazione dinamica del DOM.
  - Metodi avanzati per gli array (`filter`, `sort`, `map`, `splice`, `indexOf`, `find`).
  - Gestione eventi e persistenza impostazioni tema con `localStorage`.
- Librerie Esterne:
  - https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css  per le icone.