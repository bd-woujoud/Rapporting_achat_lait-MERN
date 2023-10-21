const Fournisseur =require("../models/ficheFourni")
module.exports={
    createFournisseur: function (req, res) {

        Fournisseur.create(req.body, function (err, Fournisseur) {

              if (err) {
                res.status(500).json({
                    message: 'error adding new Fournisseur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'Fournisseur successfuly added',
                    success: true,
                    data: Fournisseur
                })
            }

        })
    
    } ,
    deleteFournisseur: function (req, res) {

        Fournisseur.deleteOne({_id:req.params.id}, function (err, Fournisseur) {

              if (err) {
                res.status(500).json({
                    message: 'error delete Fournisseur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data: Fournisseur
                })
            }

        })
        
    },
    updateFournisseur: function (req, res) {

        Fournisseur.updateOne( req.body, {_id:req.params.id}, function (err,Fournisseur) {

              if (err) {
                res.status(500).json({
                    message: 'error update Fournisseur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    success: true,
                    data: Fournisseur
                })
            }

        })
        
    },
    getByIdFournisseur: function (req, res) {

        Fournisseur.findById({_id:req.params.id}, function (err,Fournisseur) {

              if (err) {
                res.status(500).json({
                    message: 'error  get Fournisseur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'Fournisseur found',
                    success: true,
                    data:Fournisseur
                })
            }

        })
        
    },
    getAllFournisseur: function (req, res) {

        Fournisseur.find( {   } , function (err, Fournisseur) {

              if (err) {
                res.status(500).json({
                    message: 'error  get All Fournisseur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'Fournisseur found',
                    success: true,
                    data: Fournisseur
                })
            }

        })
        
    }






    }


















