
const { boolean } = require('joi')
const mongoose=require('mongoose')

const NoteSchema = new mongoose.Schema({

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

centre:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Centre",
},

indicateurs:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "indicateur",
},
achetteur:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Achetteur",
},
module:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "module",
},

isValid:{
    type:Boolean,
    default:false
    
    }
    
},

{timestamps:true}

)

module.exports=mongoose.model("Note",NoteSchema)