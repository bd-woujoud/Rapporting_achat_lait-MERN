const categorie =require("../models/CategorieModel")
module.exports={
    createCategorie: function (req, res) {

        categorie.create(req.body, function (err, categorie) {

              if (err) {
                res.status(500).json({
                    message: 'error adding new categorie',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'product successfuly added',
                    success: true,
                    data: categorie
                })
            }

        })
    
    } ,
    deleteCategorie: function (req, res) {

        categorie.deleteOne({_id:req.params.id}, function (err, categorie) {

              if (err) {
                res.status(500).json({
                    message: 'error delete categorie',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data: categorie
                })
            }

        })
        
    },
    updateCategorie: function (req, res) {

        categorie.updateOne( req.body, {_id:req.params.id}, function (err, categorie) {

              if (err) {
                res.status(500).json({
                    message: 'error update categorie',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    success: true,
                    data: categorie
                })
            }

        })
        
    },
    getByIdCategorie: function (req, res) {

        categorie.findById({_id:req.params.id}, function (err, categorie) {

              if (err) {
                res.status(500).json({
                    message: 'error  get categorie',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'categorie found',
                    success: true,
                    data: categorie
                })
            }

        })
        
    },
    getAllCategorie: function (req, res) {

        categorie.find( {   } , function (err, categorie) {

              if (err) {
                res.status(500).json({
                    message: 'error  get All categorie',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'categorie found',
                    success: true,
                    data: categorie
                })
            }

        })
        
    }






    }


















