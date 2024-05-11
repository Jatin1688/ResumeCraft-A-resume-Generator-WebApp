const jwt=require('jsonwebtoken')
const UserModal = require('../Models/user.js')

const checkuserauth = async(req,res,next)=>{
// console.log("hello auth")
const {token}=req.cookies 
if(!token){
    req.flash('error','unauthorized user,please login')
    // res.redirect('./')
}else{
    const verifytoken= jwt.verify(token,'Ramsita@108000000')
    // console.log(verifytoken)
    const data= await UserModal.findOne({_id:verifytoken.ID})
    // console.log("hello ji") 
    // console.log(data) 
    req.data1=data;
    // console.log("jai")
    next()
 }
}
module.exports=checkuserauth