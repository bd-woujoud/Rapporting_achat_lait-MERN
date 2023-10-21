const mongoose=require('mongoose')
const UserModel = require('../models/UserModel')


const adminSchema=new mongoose.Schema({



},

{timestamps:true}

)

UserModel.discriminator("admin",adminSchema)
module.exports=mongoose.model("admin")