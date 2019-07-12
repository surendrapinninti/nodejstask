var mongoose =require('mongoose');
var Schema=mongoose.Schema;


var userdata=new Schema({
    name: {
        type: String,
          unique : false,
      required:true
      },
      age: {
        type: Number,
          unique : false,
          required:true
      },
      contact: {
        mobile: {
          type: String,
          unique : false, 
        },
        email:{
          type: String,
          unique : true,
          
        }
      },
      address: {
        street:{
          type: String,
          unique : false,
          
        },
        city: {
          type: String,
          unique : false,
          
        },
        state: {
          type: String,
          unique : false,
          
        },
        pincode: {
          type: String,
          unique : false,
          
        }
      }
});
module.exports=mongoose.model("user_data",userdata);