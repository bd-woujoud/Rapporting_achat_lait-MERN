const modules=require("../models/ModuleModel")
const { ValidationModule } = require("../validation/module")

module.exports=
{
    createmodules: function (req, res) {
        // const { error } = ValidationModule(req.body)

        // if (error)
        //     return res.status(422).json({
        //         success: false,
        //         errors: error,
        //         message: 'user data validation error'
        //     })
    
        // else {

        modules.create(req.body, function (err, modules) {

              if (err) {
                res.status(500).json({
                    message: 'error adding new modules',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'modules successfuly added',
                    success: true,
                    data:modules
                })
            }

        })
    
    } ,
    deletemodules: function (req, res) {

        modules.deleteOne({_id:req.params.id}, function (err, modules) {

              if (err) {
                res.status(500).json({
                    message: 'error delete modules',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data: modules
                })
            }

        })
        
    },
    updatemodules: function (req, res) {

        modules.updateOne( {_id:req.params.id}, req.body,{new:true} ,function (err, modules) {

              if (err) {
                res.status(500).json({
                    message: 'error update modules',
                    success: false,
                    errors: err+err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    // success: true,
                    data: modules
                })
            }

        })
        
    },
    getByIdmodules: async (req, res)=> {

        modules.findById({_id:req.params.id}).populate('indicateurs')
              .exec((err, modules)=> {

              if (err) {
                res.status(500).json({
                    message: 'error  get modules',
                    success: false,
                    errors: err+err
                })
            } else {
                res.status(201).json({
                    message: 'modules found',
                    success: true,
                    data:modules
                })
            }

        })
        
    },
    
    getModulesByFerme: function (req, res) {

        modules.find({cible:"ferme"}).populate('indicateurs').exec((err, modules)=> {

              if (err) {
                res.status(500).json({
                    message: 'error  get modules',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'modules found',
                    success: true,
                    data:modules
                })
            }

        })
        
    },
    getModulesCentre: function (req, res) {

        modules.find({cible:"ccl"}).populate('indicateurs').exec((err, modules)=> {

              if (err) {
                res.status(500).json({
                    message: 'error  get modules',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'modules found',
                    success: true,
                    data:modules
                })
            }

        })
        
    },

    getAllmodules: function (req, res) {
        modules.find({}).populate('indicateurs').exec((err, modules)=> {

        

              if (err) {
                res.status(500).json({
                    message: 'error  get All modules',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'modules found',
                    success: true,
                    data: modules
                })
            }

        })
        
    },





        

            
    }


















