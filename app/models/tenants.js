const mongoose = require('mongoose')
const axios = require('axios')

const Schema = mongoose.Schema

const tenantSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    aadhar : {
        type : String,
        required : true
    },
    pan : {
        type : String,
        required : true
    },
    room : {
        type : Schema.Types.ObjectId,
        ref : 'Room',
        required:true
    },
    genders : {
        type : String
    }
})

tenantSchema.pre('save',function(next){
    let result
    axios.get(`https://api.genderize.io?name=${this.name}`)
        .then((res)=>{
            console.log(res)
            this.genders = res.data.gender
        })
        .catch((err)=>{
            console.log(err)
        })
        next()
})

const Tenant = mongoose.model('Tenant',tenantSchema)

module.exports = Tenant