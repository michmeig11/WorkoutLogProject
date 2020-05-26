//env
require('dotenv').config() // this loads in the dotenv file's content

//express
const express = require('express'); //importing express
const app = express(); //invoking the express depenency 

//controllers
const workout = require("./controllers/workoutcontroller");
const user = require('./controllers/usercontroller');

//database
const sequelize = require('./db');
sequelize.sync(); // to drop tables place (force: true) inside sync()
app.use(express.json());
app.use(require('./middleware/headers'));

//listen
app.listen(process.env.PORT, ()=> console.log(`app is listening on ${process.env.PORT}`)); //assigning the server/port for our app

// app.use(express.static(__dirname + '/public'));console.log(__dirname); //the app will use a static page 

// app.get('/', (req, res) => res.render('index')); // setting an endpoint 

//routes
app.use('/user', user); //club goer
app.use(require('./middleware/validate-session')); // bouncer of a club
app.use('/log', workout);// club

