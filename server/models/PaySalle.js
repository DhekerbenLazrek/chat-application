const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaySalleSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  title:String,
  userphone:  Number,
    
  startD: {
    type: String,
  },
  endD: {
    type: String,
  },
  time: String,

  total: String,

  status: {
    type: String,
    default: "user",
  },
});

const PaySalle = mongoose.model("PaySalle", PaySalleSchema);
module.exports = PaySalle;
