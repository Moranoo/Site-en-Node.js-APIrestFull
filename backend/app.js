const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');

const path = require('path');

const stuffRoutes = require('./routes/stuff');

const userRoutes = require('./routes/user')

app.use(bodyParser.json());//attrape toutes les requêtes entrantes et les transforme en objet JS utilisable

app.use('/images', express.static(path.join(__dirname, 'images')));


mongoose.connect('mongodb://127.0.0.1:27017/projetvente',
    { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/stuff',stuffRoutes);
app.use('/api/auth',userRoutes);
         
module.exports = app;