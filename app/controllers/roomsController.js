const Rooms = require('../models/room')
const multer = require('multer')

// let storage = multer.diskStorage({

//     destination: function (req, file, cb) {

//         cb(null, 'uploads/')

//     },

//     filename: function (req, file, cb) {

//         cb(null, file.fieldname + '-' + Date.now() + '.jpg')

//     }

// });


//let upload = multer({ storage: storage }).single('images');

module.exports.list = (req,res) => {
    Rooms.find().populate('building')
        .then((rooms)=>{
            res.json(rooms)
        })
        .catch((err)=>{
            res.json(err)
        })
} 

module.exports.create = (req,res) => {
    const data = req.body
    const room = new Rooms(data)
    room.save()
        .then((room)=>{
            res.json(room)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Rooms.findById(id)
        .then((room)=>{
            if(room){
                res.json(room)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const data = req.body
    Rooms.findByIdAndUpdate(id,data,{new:true,runValidators:true})
    .then((room)=>{
        if(room){
            res.json(room)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    Rooms.findByIdAndDelete(id)
    .then((room)=>{
        if(room){
            res.json(room)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}