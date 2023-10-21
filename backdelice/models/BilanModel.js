const mongoose=require('mongoose')

const bilanSchema=new mongoose.Schema({

note:{

    type:Number,
    required:true,
},



module: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "module",

  }], 

  score:{
type:Number,
required:true,


  },
  point:{
    type:String,
    required:true,
    
    
      },
  achetteur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "achetteur",

  }, 
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categorie",

  }, 
  ficheFourni: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ficheFourni",

  }, 

},

{timestamps:true}

)


module.exports=mongoose.model("bilan",bilanSchema)