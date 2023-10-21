
const mongoose=require('mongoose')

const indicateurSchema = new mongoose.Schema({

nom:{
    type:String,
    required:true,
},

description:{
    type:String,
    required:true,
},
note:{
    type:Number,
    
},
observation:{

    type:String,
    
},

ferme:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ferme",
},

modulee:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "module",
},

note:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Note",
}
},

{timestamps:true}

)

module.exports=mongoose.model("indicateur",indicateurSchema)