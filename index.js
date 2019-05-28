const MONGODB_URI = "mongodb://localhost/todo";
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");

const authRoutes = require('./routes/auth');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(authRoutes);

mongoose.connect(MONGODB_URI, {useNewUrlParser: true}).then(()=>{
  console.log('Connected to mongoDb')
  app.listen(3000);
})

