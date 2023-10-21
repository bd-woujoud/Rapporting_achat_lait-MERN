const achetteurController=require("../controllers/AcheteurController");
const route=require("express").Router();
 route.delete("/delete/:id" ,achetteurController.deleteAcheteur );
 route.put("/update/:id" ,achetteurController.updateAcheteur);
 route.get("/getAll" ,achetteurController.getAllAcheteur);
 route.get("/getbyid/:id",achetteurController.getByIdAcheteur);
 route.get('/search',achetteurController.Searchachetteur)
 module.exports=route