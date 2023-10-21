const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ficheForniSchema = new Schema({

region:{

    type:String,
    require:true
},

code_region:{

    type:String,
    require:true
},

zone:{

    type:String,
    require:true
},

code_zone:{

    type:String,
    require:true
},
gouvernerat:{

    type:String,
    require:true
},
code_gouvernerat:{

    type:String,
    require:true
},

categorie: {
    type: mongoose.Schema.Types.ObjectId, //cle etranger
    ref: "categorie",

  }, 

 
},

{timestamps:true}

)


module.exports = mongoose.model("Fournisseur",ficheForniSchema);
