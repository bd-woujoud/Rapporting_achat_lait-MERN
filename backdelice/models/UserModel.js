const mongoose=require('mongoose')
var uniqueValidator = require('mongoose-unique-validator'); 
const Schema=mongoose.Schema
const bcrypt=require("bcrypt")
const userSchema =new Schema({


    nom:{

        type:String,
    
    },

    prenom:{

        type:String,

    },

    email:{

        type:String,
        unique:true
    },
  

    password:{

        type:String,
    },
    //confirmPassword:{
     //   type:String
    //},

    num_tel:{

        type:Number ,
       // unique:true
    },
   matricule:{

        type:String,
       //unique:true

    },
  
    role:{

        type:String,
        enum:["admin","achetteur"],
        default:"achetteur"

    }
},

{timestamps:true})//te3tik date de creation wel mise a jour de model 


// Apply the uniqueValidator plugin to userSchema.


//Presave middleware - NOTE: if use arrow function, this becomes empty object, and we can't use isModified()
userSchema.pre("save", function (next) {
    //If there's no change to password field (no change, no add new), call next()
    if (!this.isModified('password')) {
        next()
    }
  
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if (err)
            return next(err)
        this.password = hashedPassword;
        return next()
    })
  })
  //Custom method - if u wanna use 'this' as user document, don't use arrow function coz arrow function watch video 8 in my react document for more info

userSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err)
            return cb(err)
        if (!isMatch)
            return cb(null, false)
        return cb(null, this)
    })
  }
userSchema.plugin(uniqueValidator)

module.exports=mongoose.model('user', userSchema);
