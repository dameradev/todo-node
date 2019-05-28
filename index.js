const MONGODB_URI = "mongodb://localhost/todo";
const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect(MONGODB_URI, {useNewUrlParser: true}).then(()=>console.log('Connected to mongoDb'))