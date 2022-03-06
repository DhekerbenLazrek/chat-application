const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaySalleSchema = new Schema(
  {
  title: {
    type: String,
    required: true,
  },
  typedefete : {
    type : Array,
    required:true,
    select:true,
  },
  startD: {
    type: Date, default: Date.now ,
    
  },
  endD: {
    type: Date, default: Date.now
    
  },
  time: {
    type: String,
   
  },
  nombrepersonnes: {
  type: String,
  required: true,
  select :true,
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

  ville:{
    type: String,
    required: true,
    select :true,
  },

  total: String,
  
  status: {
    type: String,
    default: "user",
  },
},
  {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}

);

const PaySalle = mongoose.model("PaySalle", PaySalleSchema);

module.exports = PaySalle;
