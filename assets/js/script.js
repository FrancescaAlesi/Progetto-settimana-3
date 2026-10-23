const myFilm = [
  {
    id: 1,
    titoloFilm: "Fast & Furious 5",
    regista: "Justin Lin",
    annoUscita: "2011",
    visto: true,
  },
  {
    id: 2,
    titoloFilm: "Perfetti sconosciuti",
    regista: "Paolo Genovese",
    annoUscita: "2016",
    visto: true,
  },
  {
    id: 3,
    titoloFilm: "L'ora legale",
    regista: "Salvo Ficarra e Valentino Picone",
    annoUscita: "2017",
    visto: false,
  },
  {
    id: 4,
    titoloFilm: "Tre uomini e una gamba",
    regista: "Aldo, Giovanni e Giacomo, Massimo Venier",
    annoUscita: "1997",
    visto: true,
  },
  {
    id: 5,
    titoloFilm: "Sole a catinelle",
    regista: "Gennaro Nunziante",
    annoUscita: "2013",
    visto: false,
  },
  {
    id: 6,
    titoloFilm: "Grand Budapest Hotel",
    regista: "Wes Anderson",
    annoUscita: "2014",
    visto: false,
  },
];


let filtroStato = "tutti";
let testoCerca = "";
let criterioOrdinamento = "";

const formFilm = document.querySelector(".form form");
const inputsNuovoFilm = document.querySelectorAll(".aggiunta input"); 
const selectStato = document.querySelector(".aggiunta select");
const inputCerca = document.querySelector("#cerca");
const selectOrdinamento = document.querySelector("#ordinamento");
const bottoniFiltro = document.querySelectorAll(".filtri button");
const contatoreTotale = document.querySelector("#contatore-totale");
const contatoreVisti = document.querySelector("#conteggio-visti");
const contatoreDaVedere = document.querySelector("#conteggio-da-vedere");
const barraPercentuale = document.querySelector(".barra-fill");
const listaFilm = document.querySelector("#lista-film");
const pulsanteTema = document.querySelector("#pulsante");
const inputTitolo = inputsNuovoFilm[0];  
const inputRegista = inputsNuovoFilm[1];
const inputAnno = inputsNuovoFilm[2]; 

function render() {
    listaFilm.innerHTML = "";
    let filmElaborati = myFilm.filter((film) => {
        if (filtroStato === "visti") return film.visto;
        if (filtroStato === "da-vedere") return !film.visto;
        return true;
    });

    if (testoCerca.trim() !== "") {
        const q = testoCerca.toLowerCase();
        filmElaborati = filmElaborati.filter(
            (film) => film.titoloFilm.toLowerCase().includes(q) || (film.regista && film.regista.toLowerCase().includes(q))
        );
    }

    if (criterioOrdinamento !== "") {
        filmElaborati.sort((a, b) => {
            switch (criterioOrdinamento) {
                case "anno-cresc":
                    return Number(a.annoUscita) - Number(b.annoUscita);

                case "anno-decresc":
                    return Number(b.annoUscita) - Number(a.annoUscita);
                    
                case "titolo-az":
                    return a.titoloFilm.localeCompare(b.titoloFilm);
                    
                case "titolo-za":
                    return b.titoloFilm.localeCompare(a.titoloFilm);
                    
                default:
                    return 0;
            }
        });
    }

    if (filmElaborati.length === 0) {
        const liVuoto = document.createElement("li");
        liVuoto.textContent = "Nessun film trovato";
        listaFilm.appendChild(liVuoto);
        liVuoto.style.borderBottom = "none";
        aggiornaStatistiche();
        return;
    }

    filmElaborati.forEach((film) => {
        const li = document.createElement("li");
        li.dataset.id = String(film.id);
        if (film.visto) li.classList.add("film-visto");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = film.visto;
        li.appendChild(checkbox);

        const infoSpan = document.createElement("span");
        infoSpan.classList.add("info-film");
        const registaText = film.regista ? ` - Regia: ${film.regista}` : "";
        const annoText = film.annoUscita ? ` (${film.annoUscita})` : "";
        infoSpan.textContent = ` ${film.titoloFilm}${registaText}${annoText} `;
        li.appendChild(infoSpan);

        const badge = document.createElement("span");
        badge.classList.add("badge");
        if (film.visto) {
            badge.textContent = "Visto";
            badge.classList.add("badge-visto");
        } else {
            badge.textContent = "Da vedere";
            badge.classList.add("badge-da-vedere");
        }
        li.appendChild(badge);

        const btnElimina = document.createElement("button");
        btnElimina.type = "button";
        btnElimina.classList.add("elimina");
        btnElimina.textContent = "Elimina";

        btnElimina.addEventListener("click", () => {
            const indice = myFilm.indexOf(film);
            if (indice !== -1) {
                myFilm.splice(indice, 1);
                render(); 
            }
        });
        li.appendChild(btnElimina);
        listaFilm.appendChild(li);
    });

  aggiornaStatistiche();
}

function aggiornaStatistiche() {
    const totale = myFilm.length;
    const visti = myFilm.filter((f) => f.visto).length;
    const daVedere = totale - visti;

    if (contatoreTotale) contatoreTotale.textContent = totale;
    if (contatoreVisti) contatoreVisti.textContent = visti;
    if (contatoreDaVedere) contatoreDaVedere.textContent = daVedere;

    const percentuale = totale > 0 ? Math.round((visti / totale) * 100) : 0;
    if (barraPercentuale) {
        barraPercentuale.style.width = `${percentuale}%`;
    }
}

if (formFilm) {
    formFilm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const titolo = inputTitolo ? inputTitolo.value.trim() : "";
        if (!titolo) {
            alert("Inserisci il titolo del film!");
            return;
        }

        const regista = inputRegista ? inputRegista.value.trim() : "";
        const anno = inputAnno ? inputAnno.value.trim() : "";
        const stato = selectStato ? selectStato.value.toLowerCase() : "";
        
        myFilm.push({
            id: Date.now(),
            titoloFilm: titolo,
            regista: regista,
            annoUscita: anno,
            visto: stato.includes("visto"),
        });

        formFilm.reset();
        render();
    });
}

listaFilm.addEventListener("change", (e) => {
    if (e.target.type !== "checkbox") return;
    
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);

    const filmTrovato = myFilm.find((f) => f.id === id);
    if (filmTrovato) {
        filmTrovato.visto = e.target.checked;
        render();
    }
});

if (inputCerca) {
    inputCerca.addEventListener("input", (e) => {
        testoCerca = e.target.value;
        render();
    });
}

if (selectOrdinamento) {
    selectOrdinamento.addEventListener("change", (e) => {
        criterioOrdinamento = e.target.value;
        render();
    });
}

bottoniFiltro.forEach((btn) => {
    btn.addEventListener("click", () => {
        bottoniFiltro.forEach((b) => b.classList.remove("attivo"));
        btn.classList.add("attivo");
        
        const t = btn.textContent.trim().toLowerCase();
        if (t.includes("visti") && !t.includes("da")) {
            filtroStato = "visti";
        } else if (t.includes("vedere")) {
            filtroStato = "da-vedere";
        } else {
            filtroStato = "tutti";
        }
        render();
    });
});

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
    if (pulsanteTema) {
        pulsanteTema.textContent = "Tema chiaro";
    }
} else if (pulsanteTema) {
    pulsanteTema.textContent = "Tema scuro";
}

if (pulsanteTema) {
    pulsanteTema.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("tema", isDark ? "dark" : "light");
        pulsanteTema.textContent = isDark ? "Tema chiaro" : "Tema scuro";
    });
}

render();