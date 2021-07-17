const Building = require('../models/building')

module.exports.list = (req,res) => {
    Building.find()
        .then((building)=>{
            res.json(building)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const data = req.body
    const building = new Building(data)
    building.save()
        .then((building)=>{
            res.json(building)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Building.findById(id)
        .then((building)=>{
            if(building){
                res.json(building)
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
    Building.findByIdAndUpdate(id,data,{new:true,runValidators:true})
    .then((building)=>{
        if(building){
            res.json(building)
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
    Building.findByIdAndDelete(id)
    .then((building)=>{
        if(building){
            res.json(building)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}