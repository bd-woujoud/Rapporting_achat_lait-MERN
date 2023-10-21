const express = require('express');
const app =express();
const bodyParser = require('body-parser')
require('dotenv').config() //pour acceder au fichier env 
const port =3000;
const path = require('path')
const cors = require('cors');
const db=require('./config/dadabase')
var cookieParser = require('cookie-parser') 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(cookieParser())
app.use(bodyParser.json())
// to read body from request
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors({
    origin: "*",
    credentials: true,

}))

  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

  
  const userroute=require("./routes/userRoute");
  app.use("/user" , userroute);
  const categorieroute=require("./routes/CategorieRouter");
  app.use("/categorie" , categorieroute);
  const achetteurroute=require("./routes/AchetteurRouter");
  app.use("/achetteur" , achetteurroute);
  const ficheFourniroute=require("./routes/ficheFourniRouter");
  app.use("/Fournisseur" , ficheFourniroute);
  const moduleroute=require("./routes/ModuleRouter");
  app.use("/Module" , moduleroute);
  const indicateurroute=require("./routes/IndicateurRouter");
  app.use("/Indicateur" , indicateurroute);
  const adminroute=require("./routes/AdminRouter");
  app.use("/Admin" ,adminroute);
  const bilanroute=require("./routes/BilanRouter");
  app.use("/Bilan" ,bilanroute )
  const fermeroute=require("./routes/FermeRouter");
  app.use("/ferme" ,fermeroute)
  const centreroute=require("./routes/CentreRouter");
  app.use("/centre" ,centreroute)
  const noteroute=require("./routes/NoteRouter");
  app.use("/note" ,noteroute)



// handle errors
app.use(function (err, req, res, next) {
    
  console.log(err);

  if (err.status === 404)
      res.status(404).json({ message: " Path Not found" });
  else
      res.status(500).json({ message: "Something looks wrong " +err});
});

app.listen(port, () => {
  try {
    console.log(`Success http://localhost:${port}`);
  } catch (error) {
    console.log(`Error connection`);
  }
});
