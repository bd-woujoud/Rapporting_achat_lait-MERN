const noteController=require("../controllers/NoteController")
const route=require("express").Router();
 route.post("/create" ,noteController.createnote);
 route.delete("/delete/:id" ,noteController.deletenote);
 route.put("/update/:id" ,noteController.updatenote);
 route.post("/getAllScoreBymodule" ,noteController.getAllScoreBymodule);
 route.get("/getbyid/:id",noteController.getByIdnote);
 route.post("/getNoteByAchetteurFerme",noteController.getScoreIndicateurs);
 route.post("/getNoteValid",noteController. getNoteValid);
 route.post("/getNotebyFermeAchetteur",noteController. getNotebyFerme);



 module.exports=route 
