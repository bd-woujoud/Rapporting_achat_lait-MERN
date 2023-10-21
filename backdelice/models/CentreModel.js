const mongoose=require('mongoose')
const Schema=mongoose.Schema
const centre = new Schema({

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

categorie: {
    type: mongoose.Schema.Types.ObjectId, //cle etranger
    ref: "categorie",

  }, 
  sous_categorie:{

    type:String,
   // enum:["grande ferme","petite ferme" , "partenaire" , "commercial" ],
},
 
classe:{

    type:String,
   // enum:["ferme etatique","projet evolution" , "ferme privee" , "commercial" , "non milky way" , "milky way" ],
},

nature:{

    type:String,
    enum:["clean","non clean" ],
},

},

{timestamps:true}

)


module.exports = mongoose.model("Centre",centre);
