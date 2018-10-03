const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use("static", express.static("static"));

app.get("/", (req, res) =>{
    res.render("home");
});

app.get("/quem-somos", (req, res) =>{
    res.render("quem-somos");
});

app.listen(3000, () =>{
    console.log("Servidor inicializado")
});