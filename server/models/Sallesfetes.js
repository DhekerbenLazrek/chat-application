const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const SallesfetesSchema = new Schema({
    avatar: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
   
    youtubeLink: {
        type: String,
        required: true
    },
    
});


const Sallesfetes = mongoose.model('Sallesfetes', SallesfetesSchema);

module.exports = { Sallesfetes };
