const moduleController=require("../controllers/ModuleController")
const route=require("express").Router();
 route.post("/create" ,moduleController.createmodules);
 route.delete("/delete/:id" ,moduleController.deletemodules);
 route.put("/update/:id" ,moduleController.updatemodules);
 route.get("/getAll" ,moduleController.getAllmodules);
 route.get("/getbyid/:id",moduleController.getByIdmodules);
 route.get("/getbyFerme",moduleController.getModulesByFerme);
 route.get("/getbyCentre",moduleController.getModulesCentre);
 module.exports=route