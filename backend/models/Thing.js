const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('produits', thingSchema);//pour lire et exploiter les donners on exporte le schema
//le 1er argument est le nom du modèle, le 2eme est le schema
// dans ce fichier le shema de la bdd est créé, le schema structure les données qui seront stockées dans la bdd et les rends obligatoires