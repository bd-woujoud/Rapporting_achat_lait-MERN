const indicateur = require("../models/IndicateurModel");
const { ValidationIndicateur } = require("../validation/Indicateur");

module.exports={

    createIndicateur: function (req, res) {
        const { error } = ValidationIndicateur(req.body)
        if (error)
            return res.status(422).json({
                success: false,
                errors: error,
                message: 'user data validation error'
            })
    
        else {
            
        indicateur.create(req.body, function (err, indicateur) {

              if (err) {
                res.status(500).json({
                    message: 'error adding new indicateur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'indicateur successfuly added',
                    success: true,
                    data: indicateur
                })
            }
        })
    }} ,

    deleteIndicateur: function (req, res) {
        indicateur.deleteOne({_id:req.params.id}, function (err, indicateur) {

              if (err) {
                res.status(500).json({
                    message: 'error delete indicateur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data: indicateur
                })
            }
        })
        
    },

    updateIndicateur: function (req, res) {

        indicateur.updateOne(  {_id:req.params.id} ,req.body,{new : true}, function (err, indicateur) {

              if (err) {
                res.status(500).json({
                    message: 'error update indicateur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    success: true,
                    data: indicateur
                })
            }

        })
        
    },

    getByIdIndicateur: function (req, res) {

        indicateur.findById({_id:req.params.id}).populate("note"). exec ((err, indicateur) =>{
              if (err) {
                res.status(500).json({
                    message: 'error  get indicateur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'indicateur found',
                    success: true,
                    data: indicateur
                })
            }
        })
    },

    getAllIndicateur: function (req, res) {

        indicateur.find( { }).populate("note"). exec ((err, indicateur)=> {

              if (err) {
                res.status(500).json({
                    message: 'error  get All indicateur',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'indicateur found',
                    success: true,
                    data:indicateur
                })
            }

        })
        
    }

    }








