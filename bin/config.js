var mongoose=require('mongoose');
const url='mongodb://suru:suru1997@ds149132.mlab.com:49132/surudb';
 const db=mongoose.connect(url);
 if(!db){
     console.log("Not conected");
 }
 module.exports.db;