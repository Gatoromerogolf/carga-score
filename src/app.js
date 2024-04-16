const express = require('express');
const path = require('path'); // une directorios
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const app = express(); // inicializa el express  ???

//settings
app.set('port', process.env.port || 3000);
app.set('view engine', 'ejs'); //  ejs como motor de plantillas
app.set('views', path.join(__dirname, 'views')) // dirname indica donde se esta ejecutando 

// middlewares
app.use(morgan('dev')); //morgan registra lo que llega
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Flam822',
    port: 3306,
    database: 'bolillanegra'
}, 'single'));


// routes

app.listen (app.get('port'), () => {
    console.log ('Escuchando en port 3000')
})
