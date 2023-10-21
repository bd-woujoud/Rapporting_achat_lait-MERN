const fermeController=require("../controllers/FermeController")
const route=require("express").Router();
 route.post("/create" ,fermeController.createferme);
 route.delete("/delete/:id" ,fermeController.deleteferme);
 route.put("/update/:id" ,fermeController.updateferme);
 route.get("/getAll" ,fermeController.getAllferme);
 route.get("/getbyid/:id",fermeController.getByIdferme);
 route.get('/search',fermeController.SearchFerme)
 route.post('/getbyAchetteur',fermeController.getByAchetteur)

 module.exports=route