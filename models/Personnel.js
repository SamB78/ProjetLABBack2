const mongoose = require('mongoose')
const personnelSchema = mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    numeroContact: { type: String, required: true },
    mailContact: { type: String, required: true },
    chefChantier: { type: String, required: true },
    interimaire: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Personnel', personnelSchema);