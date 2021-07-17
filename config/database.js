const mongoose = require('mongoose')

const setUpDp = () =>{
    mongoose.connect('mongodb://localhost:27017/pg-owner')
        .then(()=>{
            console.log('connected to database')
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports = setUpDp