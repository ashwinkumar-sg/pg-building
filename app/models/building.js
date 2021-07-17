const mongoose = require('mongoose')



const Schema = mongoose.Schema


const buildingSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true 
    },
    buildingType : {
        type : String,
        enum : ['male','female','others'],
        default : 'male'
    },
    geo : {
        lat : {
            type : Number
        },
        lon : {
            type : Number
        }
    }

})



const Building = mongoose.model('Building',buildingSchema)

module.exports = Building
