const CentreModel = require("../models/CentreModel")
const centre=require("../models/CentreModel")
const { centerValidation } = require("../validation/centre")

module.exports={

    createcentre: function (req, res) {
        const { error } = centerValidation(req.body)

        if (error)
            return res.status(422).json({
                success: false,
                errors: error,
                message: 'user data validation error'
            })
    
        else {
        centre.create(req.body, function (err, centre) {

              if (err) {
                res.status(500).json({
                    message: 'error adding new centre',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'centre successfuly added',
                    success: true,
                    data:centre
                })
            }

        })
    
    } },


    deletecentre: function (req, res) {

        centre.deleteOne({_id:req.params.id}, function (err, centre) {

              if (err) {
                res.status(500).json({
                    message: 'error delete centre',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data:centre
                })
            }

        })
        
    },
    updatecentre: function (req, res) {

        centre.updateOne({_id:req.params.id} ,req.body,{new:true} , function (err, centre) {

              if (err) {
                res.status(500).json({
                    message: 'error update centre',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    success: true,
                    data: centre
                })
            }
        })
    },

    getByIdcentre: function (req, res) {

        ferme.findById({_id:req.params.id}).populate('achetteur').populate('categorie').exec((err, centre)=> {

              if (err) {
                res.status(500).json({
                    message: 'error  get centre',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'centre found',
                    success: true,
                    data:centre
                })
            }

        })
        
    },

    getAllcentre: function (req, res) {
        centre.find({}).populate('achetteur').populate('categorie').exec((err, centre)=> {

              if (err) {
                res.status(500).json({
                    message: 'error  get All centre',
                    success: false,
                    errors: err+err
                })
            } else {
                res.status(201).json({
                    message: 'centre found',
                    success: true,
                    data: centre
                })
            }
        })
        
    } ,


    Searchcentre: (req,res)=> {
        console.log(req.query.keyword);
        
        const {keyword } = req.query
        CentreModel.find( req.params.keyword !== '' ? {
            $or: [{ code: { $regex: `${keyword}`, $options: 'i' } },
            { region: { $regex: `${keyword}`, $options: 'i' } } ,
                { zone: { $regex: `${keyword}`, $options: 'i' } } ,
            ]
        } : {})
        
        .then(centre => {
            res.status(200).json({
                message: 'all centre found',
                data: centre
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
