const mongoose=require('mongoose')
const Schema=mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator'); 
const ferme = new Schema({

   code:{

       type:String,
       unique:true
    },


    fournisseur:{
        type:String,
        require:true
    },
    code_parent:{
        type:Number ,
        require:true
    },

    frs_parent:{
        type:String,
        require:true
    },

region:{
    type:String,
},


zone:{
    type:String,
},


gouvernerat:{
    type:String,
},

achetteur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }, 



  sous_categorie:{
    type:String,
},
 
classe:{
    type:String,
},

nature:{
    type:String,
},



},

{timestamps:true}

)

ferme.plugin(uniqueValidator)
module.exports = mongoose.model("Ferme",ferme);
