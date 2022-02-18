const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalleSchema = new Schema({


    avatar: {
        type: String,
        required: true
    },
    title: {
        type: String,
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
    adresse: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
   
    youtubeLink: {
        type: String,
        required: true
    },
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
); 


const Salle = mongoose.model('Salle',  SalleSchema);

module.exports = Salle;
