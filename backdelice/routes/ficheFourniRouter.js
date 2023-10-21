const ficheFourniController=require("../controllers/ficheFourniController");
const route=require("express").Router();
 route.post("/create" ,ficheFourniController.createFournisseur);
 route.delete("/delete/:id" ,ficheFourniController.deleteFournisseur);
 route.put("/update/:id" ,ficheFourniController.updateFournisseur);
 route.get("/getAll" ,ficheFourniController.getAllFournisseur);
 route.get("/getbyid/:id",ficheFourniController.getByIdFournisseur);


 module.exports=route