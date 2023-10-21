//Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/delicoo";

mongoose.connect(mongoDB,{ usenewurlparser: true ,useunifiedtopology: true});
console.log('db connected')

mongoose.Promise = global.Promise;
module.exports = mongoose;