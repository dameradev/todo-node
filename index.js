const MONGODB_URI = "mongodb://localhost/todo";
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


const authRoutes = require('./routes/auth');

const app = express();

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions"
})


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(authRoutes);

mongoose.connect(MONGODB_URI, {useNewUrlParser: true}).then(()=>{
  console.log('Connected to mongoDb')
  app.listen(3000);
})

