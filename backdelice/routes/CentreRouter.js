const centreController=require("../controllers/CentresController")
const route=require("express").Router();
 route.post("/create" ,centreController.createcentre);
 route.delete("/delete/:id" ,centreController.deletecentre);
 route.put("/update/:id" ,centreController.updatecentre);
 route.get("/getAll" ,centreController.getAllcentre);
 route.get("/getbyid/:id",centreController.getByIdcentre);
 route.get('/search',centreController.Searchcentre)

 module.exports=route