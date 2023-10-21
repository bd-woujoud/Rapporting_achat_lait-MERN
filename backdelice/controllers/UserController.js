const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();
function signToken(userID) { //creation de token (jwt)
    return jwt.sign({
        iss: 'moonServer',
        sub: userID,
        
      
    }, process.env.SECRET_KEY, { expiresIn: '24h' })

}

const Joi = require("joi");
const { ValidationRegister, ValidationLogin } = require('../validation/authentificationValidation');




module.exports = { 

 
    register:function (req, res)  {
        const { email} = req.body;
      
        const { error } = ValidationRegister(req.body)

        if (error)
            return res.status(422).json({
                success: false,
                errors: error,
                message: 'user data validation error'
            })
    
    
        else  {
    
            UserModel.findOne({ email }, function (err, user) {
    
                if (err) return res.status(500).json({ msg: err.message, error: true });
                if (user)
                    return res.status(422).json({
                        message: "user with this email is already exist!",
                        errors: {
                            details: [
                                {
    
                                    "path": [
                                        "email"
                                    ],
                                    "message": [
                                        "email déja utilisé"
                                    ]
                                }
                            ]
                        }
                    })
    
                else {
    
                    const newUser = new UserModel(req.body)
    
                    newUser.save((err, user) => {
                        if (err)
                            return res.status(500).json({ msg: err.message, error: true })
                        else {
                           
                            return res.status(200).json({ user:user, error: false })
                        }
                    })
                }
    
            })
    }
    },
    
    
    
    login:function (req, res) {

        const { error } = ValidationLogin(req.body)

        if (error)
            return res.status(422).json({
                success: false,
                errors: error,
                message: 'user data validation error'
            })
    
      
    
        else  {

  const { _id, email,nom,prenom } = req.user;
  UserModel.findById({ _id: _id })

      .exec((err, user) => {
          if (!err) {
              const token = signToken(_id);

              res.cookie("access_token", token, { maxAge: 3600 * 1000, httpOnly: true, sameSite: true });

              return res.status(200).json({ isAuthenticated: true, user: { email,nom,prenom}, role: req.user.role ,token})

          }
      })
    }},


    logout: (req, res) => {

        res.clearCookie("access_token");
        res.status(200).json({
    
          isconnected: false,
          message: "succesffully logged out",
       
    
        })},



authenticated: (req, res) => {
  const { email, _id,phone,address,nom,prenom} = req.user;
  UserModel.findById({ _id: _id })
      .exec((err, user) => {
          if (!err) {
              return res.status(200).json({ isAuthenticated: true, user: { email,_id,phone,address,nom,prenom}, role: user.role})
          }
      })
},


getAllUsers: function (req, res) {

  UserModel.find({}, (err, users) => {
      if (err) {
          res.json({ message: 'error get all users' + err, data: null, status: 500 })
      }
      else {
          res.json({ message: 'all users in system', size: users.length, data: users, status: 200 })

      }
  })

},

getUserById: function (req, res) {

  UserModel.findById({ _id: req.params.id })

      .exec((err, user) => {
          if (err) {
              res.json({ message: 'error get one user' + err, data: null, status: 500 })
          }
          else {
              res.json({ message: ' user in system', data: user, status: 200 })


          }
      })
},

getUserbyRole: function (req, res) {

  UserModel.find({ role: req.params.role }, (err, User) => {
      if (err) {
          res.json({ message: 'error get one User' + err, data: null, status: 500 })
      } else {
          res.json({ message: ' Users in system', data: User, status: 200 })
      }
  })
},


deleteUserById: function (req, res) {

  UserModel.findByIdAndDelete({ _id: req.params.id }, (err, User) => {

      if (err) { res.json({ message: 'error delete  one User' + err, data: null, status: 500 }) }
      else { res.json({ message: 'one User delete system', data: User, status: 200 }) }

  })

},


updateuser: function (req, res) {

    UserModel.updateOne( {_id:req.params.id} ,req.body,{new:true}, function (err, user) {

          if (err) {
            res.status(500).json({
                message: 'error update',
                success: false,
                errors: err
            })
        } else {
            res.status(201).json({
                message: 'update successfuly',
                success: true,
                data: user
            })
        }

    })
    
},


}