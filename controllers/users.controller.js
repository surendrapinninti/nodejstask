const db=require("../bin/config");
var users=require("../models/usermodel");

exports.adduser=(req,res)=>{
var data=new users(req.body)
data.save(function(err,result){
res.send(result);
});

}

exports.alluser=(req, res)=>{
users.find({},function(err,result){
res.send(result);
})
}

exports.oneuser=(req,res)=>{
users.findById({"_id":req.params.id},function(err,result){
if(err){
    res.send(err);
}
else
{
    res.send(result);
}
});
}

exports.updateusre=(req,res)=>{

users.findByIdAndUpdate({"_id":req.params.id},function(err,result){
users.updateOne({"_id":req.params.id},function(err,result){
    if(err){
        res.send(err);
    }
    else
    {
        res.send(result);
    }
    
})
}

exports.deleteuser=(req,res)=>{
    users.findByIdAndRemove({"_id":req.params.id},function(err,result){
        if(err){
            res.send(err);
        }
        else
        {
            res.send(result);
        }
    })


}