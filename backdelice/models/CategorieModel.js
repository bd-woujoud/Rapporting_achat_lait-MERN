
const mongoose=require("mongoose")

const Schema = mongoose.Schema

const categorieSchema=new Schema({

    nomCat:{

        type:String,
        required:true //importnt lezmou yet3amer 
    },

},


{timestamps:true} //date de creation cette model et mise a jour

)


module.exports=mongoose.model('categorie', categorieSchema);


