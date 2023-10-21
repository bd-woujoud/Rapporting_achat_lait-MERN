
const UserController = require('../Controllers/UserController');
const Route = require('express').Router();
require('../middleware/passport');

const jwt = require('jsonwebtoken');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;

 Route.post("/register", UserController.register)
Route.post("/login", passport.authenticate('local', { session: false }), UserController.login)
Route.get("/logout", UserController.logout)
Route.get('/allUser', UserController.getAllUsers) 
Route.get('/getUserbyid/:id', passport.authenticate('jwt', { session: false }), UserController.getUserById)
Route.get('/getUserbyrole/:role', UserController.getUserbyRole)
Route.delete('/deleteUserbyid/:id',  UserController.deleteUserById)
Route.put('/updatebyid/:id',  UserController.updateuser)


//Vérifiez le statutx d’authentification chaque fois que l’application front-end rafraîchit
Route.get("/authenticated", passport.authenticate('jwt', { session: false }), UserController.authenticated)



module.exports = Route;