const mongoose = require("mongoose")

require('dotenv').config()
const connection = mongoose.connect(process.env.URL)

const pollSchema = mongoose.Schema({
    title: String,
    category: String,
    startDate: String,
    endDate:String,
    minReward: Number,
    maxReward: Number,
  },{
    versionKey: false
  });

const Poll = mongoose.model('Poll', pollSchema);

module.exports = {
    connection,
    Poll
}