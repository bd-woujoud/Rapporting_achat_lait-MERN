const bilanController=require("../Controllers/BilanController");
const route=require("express").Router();
 route.post("/create" ,bilanController.createBilan);
 route.delete("/delete/:id" , bilanController.deleteBilan);
 route.put("/update/:id" , bilanController.updateBilan);
 route.get("/getAll" , bilanController.getAllBilan);
 route.get("/getbyid/:id",bilanController.getByIdBilan );


 module.exports=route