const mongoose=require('mongoose')
const UserModel = require('../models/UserModel')

const AchetteurSchema=new mongoose.Schema({



},

{timestamps:true}

)

UserModel.discriminator("Achetteur",AchetteurSchema)
module.exports=mongoose.model("Achetteur")