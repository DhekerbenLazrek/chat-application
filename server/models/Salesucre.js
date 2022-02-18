const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalesucreSchema = new Schema({
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


const  Salesucre = mongoose.model('Salesucre',  SalesucreSchema);

module.exports = { Salesucre };