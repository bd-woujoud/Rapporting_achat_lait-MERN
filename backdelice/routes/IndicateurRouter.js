const indicateurController=require("../controllers/IndicateurController")
const route=require("express").Router();
 route.post("/create" ,indicateurController.createIndicateur);
 route.delete("/delete/:id" ,indicateurController.deleteIndicateur);
 route.put("/update/:id" ,indicateurController.updateIndicateur);
 route.get("/getAll" ,indicateurController.getAllIndicateur);
 route.get("/getbyid/:id",indicateurController.getByIdIndicateur);


 module.exports=route