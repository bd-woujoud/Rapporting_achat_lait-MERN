const bilan=require("../Models/BilanModel")

module.exports=
{
    createBilan: function (req, res) {

        bilan.create(req.body, function (err, bilan) {

              if (err) {
                res.status(500).json({
                    message: 'error adding new bilan',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'bilan successfuly added',
                    success: true,
                    data:bilan
                })
            }

        })
    
    } ,
    deleteBilan: function (req, res) {

        bilan.deleteOne({_id:req.params.id}, function (err, bilan) {






              if (err) {
                res.status(500).json({
                    message: 'error delete bilan',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data: bilan
                })
            }

        })
        
    },
    updateBilan: function (req, res) {

        bilan.updateOne( req.body, {_id:req.params.id}, function (err, bilan) {

              if (err) {
                res.status(500).json({
                    message: 'error update bilan',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    success: true,
                    data:bilan
                })
            }

        })
        
    },
    getByIdBilan: function (req, res) {

        bilan.findById({_id:req.params.id}).populate('achetteur').populate('indicateur').populate('categorie').populate('ficheFourni').exec((err, bilan)=> {

              if (err) {
                res.status(500).json({
                    message: 'error  get bilan',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'bilan found',
                    success: true,
                    data:bilan
                })
            }

        })
        
    },
    getAllBilan: function (req, res) {
        bilan.find({}).populate('achetteur').populate('indicateur').populate('indicateur').populate('categorie').populate('ficheFourni').exec((err, bilan)=> {

        

              if (err) {
                res.status(500).json({
                    message: 'error  get All bilan',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'bilan found',
                    success: true,
                    data:bilan
                })
            }

        })
        
    }






    }


















