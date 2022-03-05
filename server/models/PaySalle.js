const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaySalleSchema = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  typedefete: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  userphone: {
    type: Number,
    required: true,
  },

  startD: {
    type: String,
    required: true,
  },
  endD: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  nombrespersonnes: {
  type: String,
  required: true,
  },
  ville:{
    type: String,
    required: true,
  },

  total: String,
  required: true,


  status: {
    type: String,
    default: "user",
  },
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
},

});

const PaySalle = mongoose.model("PaySalle", PaySalleSchema);
module.exports = PaySalle;
