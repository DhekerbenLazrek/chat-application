const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const SallesfetesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images: {
        type: String,
        required: false
    },
   
    youtubeLink: {
        type: String,
        required: true
    },
    dateevents: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});


const Sallesfetes = mongoose.model('Sallesfetes', SallesfetesSchema);

module.exports = { Sallesfetes };
