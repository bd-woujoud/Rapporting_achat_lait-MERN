const mongoose = require('mongoose')

const moduleSchema = new mongoose.Schema({

  nom: {
    type: String,
    required: true,
  },


  cible: {
    type: String,
    enum:["ferme","ccl"],
    required:true
  },

  indicateurs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "indicateur",
  }],



},
  { timestamps: true }
)


module.exports = mongoose.model("module", moduleSchema)