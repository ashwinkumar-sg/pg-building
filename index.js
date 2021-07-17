const express = require('express')
const app = express()
const router = require('./config/router')
const setUpDb = require('./config/database')
const port = 3070

app.use(express.json())
app.use('/',router)

setUpDb()

app.listen(port,()=>{
    console.log('listening on port',port)
})

