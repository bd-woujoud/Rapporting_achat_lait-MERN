const adminModel =require ("../Models/AdminModel")
module.exports=
{
    
    deleteAdmin: function (req, res) {

        adminModel.deleteOne({_id:req.params.id}, function (err, admin) {

              if (err) {
                res.status(500).json({
                    message: 'error delete admin',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data: admin
                })
            }

        })
        
    },
    updateAdmin: function (req, res) {

        adminModel.updateOne( req.body, {_id:req.params.id}, function (err, admin) {

              if (err) {
                res.status(500).json({
                    message: 'error update admin',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    success: true,
                    data: admin
                })
            }

        })
        
    },
    getByIdAdmin: function (req, res) {

        adminModel.findById({_id:req.params.id}, function (err, admin) {

              if (err) {
                res.status(500).json({
                    message: 'error  get admin',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'admin found',
                    success: true,
                    data: admin
                })
            }

        })
        
    },
    getAllAdmin: function (req, res) {

        adminModel.find( {   } , function (err, admin) {

              if (err) {
                res.status(500).json({
                    message: 'error  get All admin',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'admin found',
                    success: true,
                    data: admin
                })
            }

        })
        
    }





}