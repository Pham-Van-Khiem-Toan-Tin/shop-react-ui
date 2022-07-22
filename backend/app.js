const express = require('express');
const bodyParse = require('body-parser');
const {engine} = require('express-handlebars');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 8888;

app.use(express.static(__dirname + "public"));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extende: false}));

app.use(morgan('dev'));
app.engine(".hbs", engine({extname: ".hbs"}));
app.set("view engine", "hbs");
app.set("view", "./view");


app.get("/", (req, res, next) => res.send("This is shop perfect"));

app.listen(port, () => {console.log("Shop app perfect is connected!")})
