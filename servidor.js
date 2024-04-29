const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const app=express();
app.use(multer({dest: './views/uploads'}).any());

const alimentoController = require("./controllers/alimentoController")(app);
const userController = require("./controllers/userController")(app);
const loginController = require("./controllers/loginController")(app);

const directorioEstaticos = path.join( __dirname, "views"); 
app.use(express.static( directorioEstaticos ));
app.use('/uploads', express.static(path.join(__dirname, "uploads")));
console.log("Directorio archivos estáticos: " + directorioEstaticos);

const puertoServidor=3000;

app.use((req, res) => {
    res.status(404).sendFile(path.join( __dirname, "views", "404.html"));
});

const servidor=app.listen(puertoServidor, '0.0.0.0' , function( ){ 
console.log("Corriendo en http://localhost:"+puertoServidor);  
});