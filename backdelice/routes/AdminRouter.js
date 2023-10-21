const adminController=require("../Controllers/AdminController");
const route=require("express").Router();
route.delete("/delete/:id" ,adminController.deleteAdmin);
route.put("/update/:id" ,adminController.updateAdmin);
route.get("/getAll" ,adminController.getAllAdmin);
route.get("/getbyid/:id",adminController.getByIdAdmin);


module.exports=route