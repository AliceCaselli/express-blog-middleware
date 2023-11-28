// Impariamo ad utilizzare i middleware e quindi gestiamo gli errori e le pagine 404.
// Questi middleware dovranno rispondere con un json contente il codice ed il messaggio dell’errore.
// Creiamo le seguenti rotte:
// home
// posts/ (index)
// posts/ (store)
// posts/:slug (show)
// Tramite JTW creiamo una rotta per autenticare un utente ed ottenere il Token JWT e tramite un middleware limitiamo l’accesso alla rota store dei post ai soli utenti loggati.
// Svolgiamo tutto l’esercizio tramite relativi controller e router.
// Bonus
// Ritornare un errore diverso nel caso il jwt sia non valido o scaduto
// Prevedere negli errori diversi in caso di autenticazione. Fare questo usando il throw di JS
// invece di ritornare un errore tramite res.send() nei controller, lanciamo un errore tramite throw e gestiamolo nel middleware degli errori



const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const port = 8081;
// const postController = require("./controllers/posts");
const app = express();
const routerPost = require("./routers/posts");

//configuro express per leggere i dati in formato json
app.use(express.json());

//configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static("public"));

// Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
app.get('/', (req, res) => {
    res.send("<h1>Benvenuti nel mio blog</h1>");
});

// Le rotte relative ai post dovranno chiamare la funzione relativa dal controller dedicato controllers/posts.js
app.use("/posts", routerPost);

app.listen(port, () => {
    console.log("http://localhost:" + port);
});




