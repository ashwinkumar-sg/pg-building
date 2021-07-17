const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomsSchems = new Schema({
    name : {
        type : String,
        required : true
    },
    occupancy : {
        type : String,
        required : true
    },
    building : {
        type : Schema.Types.ObjectId,
        ref : 'Building',
        required : true
    },
    price : {
        type : String,
        required : true
    }
})

const Room = mongoose.model('Room',roomsSchems)

module.exports = Room