const modelferme=require("../models/FermeModel")
const { centerValidation } = require("../validation/centre")
module.exports= 

{         
     createferme: function (req, res) {

        const { error } = centerValidation(req.body)

        if (error)
            return res.status(422).json({
                success: false,
                errors: error,
                message: 'user data validation error'
            })
    
        else {

        modelferme.create(req.body, function (err, Ferme) {

              if (err) {
                res.status(500).json({
                    message: 'error adding new ferme',
                    success: false,
                    errors: err+err
                })
                
            } else {
                res.status(201).json({
                    message: 'ferme successfuly added',
                    success: true,
                    data:Ferme
                })
            }

        })
    
    }} ,
  
    deleteferme: function (req, res) {

        modelferme.deleteOne({_id:req.params.id}, function (err, Ferme) {

              if (err) {
                res.status(500).json({
                    message: 'error delete ferme',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data: Ferme
                })
            }

        })
        
    },
    updateferme: function (req, res) {

        modelferme.updateOne({_id:req.params.id},req.body,{new:true}  , function (err, Ferme) {

              if (err) {
                res.status(500).json({
                    message: 'error update ferme',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    success: true,
                    data: Ferme
                })
            }

        })
        
    },
    getByIdferme: function (req, res) {

        modelferme.findById({_id:req.params.id}).populate('achetteur').exec((err,Ferme)=> {

              if (err) {
                res.status(500).json({
                    message: 'error  get ferme',
                    success: false,
                    errors: err+err
                })
            } else {
                res.status(201).json({
                    message: 'ferme found',
                    success: true,
                    data:Ferme
                })
            }

        })
        
    },

    getAllferme: function (req, res) {
        modelferme.find({}).populate('achetteur').exec((err, Ferme)=> {

              if (err) {
                res.status(500).json({
                    message: 'error  get All ferme',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'ferme found',
                    success: true,
                    data:Ferme
                })
            }

        })
        
    },
    SearchFerme: (req,res)=> {
        console.log(req.query.keyword);
        
        const {keyword } = req.query
        modelferme.find( req.params.keyword !== '' ? {
            $or: [{ code: { $regex: `${keyword}`, $options: 'i' } },
            { region: { $regex: `${keyword}`, $options: 'i' } } ,
                { zone: { $regex: `${keyword}`, $options: 'i' } } ,
            ]
        } : {})
        
        .then(ferme => {
            res.status(200).json({
                message: 'all ferme found',
                data: ferme
            })
        })
        .catch( err => {
            res.status(500).json({ 
                message: err+err,
                status: 500
            })
        })
    },

    getByAchetteur: function (req, res) {

        modelferme.find({achetteur:req.params.achetteur, note:req.params.note}).exec((err,Ferme)=> {
 
              if (err) {
                    res.status(500).json({
                    message: 'error  get ferme',
                    success: false,
                    errors: err +err
                })
            }
             else {
                    res.status(201).json({
                    message: 'ferme found',
                    success: true,
                    data:Ferme
                })
            }
        })  
    },
    
    }


















