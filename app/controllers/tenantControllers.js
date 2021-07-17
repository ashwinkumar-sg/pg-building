const Tenant = require('../models/tenants')

module.exports.list = (req,res) => {
    Tenant.find().populate('room')
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
} 

module.exports.create = (req,res) => {
    const data = req.body
    const tenant = new Tenant(data)
    tenant.save()
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Tenant.findById(id)
        .then((tenant)=>{
            if(tenant){
                res.json(tenant)
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
    Tenant.findByIdAndUpdate(id,data,{new:true,runValidators:true})
    .then((tenant)=>{
        if(tenant){
            res.json(tenant)
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
    Tenant.findByIdAndDelete(id)
    .then((tenant)=>{
        if(tenant){
            res.json(tenant)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}