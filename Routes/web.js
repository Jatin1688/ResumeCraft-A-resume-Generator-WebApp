const express=require('express')

const usercontroller =require("../controller/Usercontroller")

const checkuserauth=require('../middlewear/auth.js')
const route=express.Router()
route.get('/registration',usercontroller.registration)
route.get('/login',usercontroller.login)
route.get('/logout',checkuserauth,usercontroller.logout)
route.get('/indexform/:data1/:data2',checkuserauth,usercontroller.resumeform)
route.post('/resumeform/:data1/:data2',checkuserauth,usercontroller.resumeforminsert)
route.get('/',usercontroller.home)
route.get('/home',checkuserauth,usercontroller.home1)
route.get('/buildresume',usercontroller.buildresume)
route.get('/buildresume1',checkuserauth,usercontroller.buildresume1)
route.get('/resumeGuide',usercontroller.resumeguide)
route.get('/resumeGuide1',checkuserauth,usercontroller.resumeguide1)


route.get('/profile',checkuserauth,usercontroller.profile)
route.post('/passwordupdate',checkuserauth,usercontroller.updatepassword)
route.post('/profileupdate/:id',checkuserauth,usercontroller.updateprofile)
route.get('/resume_templates/template1',checkuserauth,usercontroller.template1)
route.get('/resume_templates/template2',checkuserauth,usercontroller.template2)
// route
route.post('/userinsert',usercontroller.Userinsert)
route.post('/verifylogin',usercontroller.verifylogin)




module.exports=route;