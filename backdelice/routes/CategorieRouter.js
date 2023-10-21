const categorieController=require("../controllers/CategorieController");
const route=require("express").Router();
 route.post("/create" ,categorieController.createCategorie );
 route.delete("/delete/:id" , categorieController.deleteCategorie);
 route.put("/update/:id" , categorieController.updateCategorie);
 route.get("/getAll" , categorieController.getAllCategorie);
 route.get("/getbyid/:id",categorieController.getByIdCategorie );


 module.exports=route