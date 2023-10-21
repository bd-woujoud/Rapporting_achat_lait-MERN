const AchetteurModel = require("../models/AchetteurModel")
const Achetteur =require("../models/AchetteurModel")
const UserModel = require("../models/UserModel")

   
      module.exports = {
   
    deleteAcheteur: function (req, res) {

        Achetteur.deleteOne({_id:req.parames.id}, function (err, Achetteur) {

              if (err) {
                res.status(500).json({
                    message: 'error delete Achetteur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data: Achetteur
                })
            }

        })
        
    },
    updateAcheteur: function (req, res) {

        Achetteur.updateOne( req.body, {_id:req.parames.id},{new:true}, function (err, Achetteur) {

              if (err) {
                res.status(500).json({
                    message: 'error update Achetteur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    success: true,
                    data: Achetteur
                })
            }

        })
        
    },
    getByIdAcheteur: function (req, res) {

        Achetteur.findById({_id:req.parames.id}, function (err, Achetteur) {

              if (err) {
                res.status(500).json({
                    message: 'error  get Achetteur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'Achetteur found',
                    success: true,
                    data: Achetteur
                })
            }

        })
        
    },
    getAllAcheteur: function (req, res) {

        UserModel.find( { role:"achetteur"  } , function (err, Achetteur) {

              if (err) {
                res.status(500).json({
                    message: 'error  get All Achetteur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'Achetteur found',
                    success: true,
                    data: Achetteur
                })


                
            }

        })
        
    },

    Searchachetteur: (req,res)=> {
        console.log(req.query.keyword);
        
        const {keyword } = req.query
        const achetteur= UserModel.find( { role:"achetteur"  } )
        achetteur.find( req.params.keyword !== '' ? {
            $or: [{ nom: { $regex: `${keyword}`, $options: 'i' } },
            { prenom: { $regex: `${keyword}`, $options: 'i' } } ,
                { matricule: { $regex: `${keyword}`, $options: 'i' } } ,
            ]
        } : {})
        
        .then(achetteurs => {
            res.status(200).json({
                message: 'all achetteur found',
                data: achetteurs
            })
        })
        .catch( err => {
            res.status(500).json({ 
                message: err+err,
                status: 500
            })
        })
  
    }

    }


















