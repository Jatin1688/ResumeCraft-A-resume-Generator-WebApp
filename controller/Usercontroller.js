const UserModal = require('../Models/user.js')
const brcypt = require('bcryptjs')// const serveStatic = require("serve-static");
const nodemailer = require("nodemailer");
const cloudinary = require('cloudinary').v2;
// const brcypt=require('bcryptjs')
const jwt= require('jsonwebtoken')
const resumeModal=require("../Models/image.js")

cloudinary.config({
    cloud_name: 'ddpowodla',
    api_key: '393855291736591',
    api_secret: '9LJCkK4Dz3KLvFQuAbzT42P2nqw'
});





class usercontroller {
    static login = async (req, res) => {
        try {
            let y="Login - ResumeCraft";
            // res.render("login",{message:req.flash('error')})
            res.render("loginpage",{message:req.flash('error'),x:y})
        }catch(error){
            console.log(error)
            
        }

    }
  
    static home = async (req, res) => {
        try {
//  console.log("hello ji maar naam ")
       const {token}=req.cookies 
       let y="Home";
    //    const{firstname,lastname,email,image,_id}=req.data1
            res.render("home",{tok:token,x:y})
            
        } catch (error) {
            console.log(error)
        }

    }
    static home1 = async (req, res) => {
        try {
//  console.log("hello ji maar naam ")
        let y="Home";
       const {token}=req.cookies 
       const{image}=req.data1
            res.render("home",{tok:token,img:image,x:y})
            
        } catch (error) {
            console.log(error)
        }

    }
    static profile = async (req, res) => {
        try {
            const{firstname,lastname,email,image,_id}=req.data1
            // res.render("login",{message:req.flash('error')})
            // console.log(req.data1)
            // console.log(image)
            // console.log(_id)
            const {token}=req.cookies 
            let y="profile";
            const data = await UserModal.findOne({ email: email})
            // console.log(data)
             res.render('profile',{n:(firstname+" "+lastname).toUpperCase(),img:image,t:data,tok:token,message:req.flash('error'),x:y})
        } catch (error) {
            console.log(error)
        }

    }
   
    static buildresume = async (req, res) => {
        try {
            const {token}=req.cookies 
    //  const{firstname,lastname,email,image,_id}=req.data1
            // res.render("login",{message:req.flash('error')})
            let y="BuildResume";
            res.render("buildResume",{tok:token,x:y})
        } catch (error) {
            console.log(error)
        }

    }
    static buildresume1 = async (req, res) => {
        try {
            const {token}=req.cookies 
            const{image}=req.data1
            let y="BuildResume";
            res.render("buildResume",{tok:token,img:image,x:y})
        } catch (error) {
            console.log(error)
        }

    }
    static resumeguide = async (req, res) => {
        try {
            let y="ResumeGuide";
            // res.render("login",{message:req.flash('error')})
            const {token}=req.cookies 
            // const{firstname,lastname,email,image,_id}=req.data1
            res.render("resumeguide",{tok:token,x:y})
        } catch (error) {
            console.log(error)
        }

    }
    static resumeguide1 = async (req, res) => {
        try {
            let y="ResumeGuide";

            const {token}=req.cookies 
        
            const{image}=req.data1
            res.render("resumeguide",{tok:token,img:image,x:y})
        } catch (error) {
            console.log(error)
        }

    }

    static registration = async (req, res) => {
        try {
            //  res.render("registration")
            let y="Registration - ResumeCraft";
            res.render("registrationPage",{message:req.flash('error'),x:y})

            // console.log("hello")
        } catch (error) {
            console.log(error)
        }
    }



    // static sendmail = async(req, res) => {
    //     const transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user: '2021cs401@mitsgwl.ac.in',
    //             pass: '7415156737'
    //         }
    //     });

    //     const mailOptions = {
    //         from: '2021cs401@mitsgwl.ac.in',
    //         to: email,
    //         subject: 'Test Email',
    //         text: 'This is a test email sent from Express.js using nodemailer.'
    //     };

    //     // Send email
    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //             console.log('Error occurred: ', error);
    //             res.send('Error occurred while sending email.');
    //         } else {
    //             console.log('Email sent: ', info.response);
    //             res.send('Email sent successfully.');
    //         }
    //     });

    // }


    static Userinsert = async (req, res) => {
        try {
            //  res.render("registration"){
                
                    
            const imagefile = {
                name: 'profile-icon-design-free-vector.jpg',
                data: Buffer.from('your_binary_data_here'), // Replace 'your_binary_data_here' with your actual binary data
                size: 13415,
                encoding: '7bit',
                tempFilePath: 'D:\\codingnikhil\\nodeexpress\\tmp\\tmp-1-1712857980165',
                truncated: false,
                mimetype: 'image/jpeg',
                md5: 'e496d7ccf54886ee88eaab0717c27250',
                mv: function() {} // Placeholder function
            };
            

                // console.log(imagefile)
                const imageupload = await cloudinary.uploader.upload(imagefile.tempFilePath, {
                    folder: 'profileimage'
                })
 

            const { firstname, lastname, email, password, confirmpassword } = req.body
            const user = await UserModal.findOne({ email: email })
            if (user) {
                req.flash('error', 'email already exists')
                res.redirect('./registration')
            } else {
                if (firstname && lastname && email && password && confirmpassword) {
                    if (password == confirmpassword) {
                        try {
                            const hashpassword = await brcypt.hash(password, 10);
                            //  sendmail();
                            const datauser = new UserModal({
                                firstname: firstname,
                                lastname: lastname,
                                email: email,
                                password: hashpassword,
                                image: {
                                    public_id: imageupload.public_id,
                                    url: imageupload.secure_url
                                }
                            })
                            await datauser.save()
                            req.flash('success', ' Successfully your Registration,Plesase login')
                            res.redirect('./login')
                            // console.log(datauser)
                        } catch (error) {
                            console.log(error)
                        }
                    }
                    else {
                        req.flash('error', 'passsword and confirm password does not match ')
                        res.redirect('./registration')
                    }
                }
                else {
                    req.flash('error', 'all fields are required')
                    res.redirect('./registration')
                }
            }

            // console.log("hello")
        } catch (error) {
            console.log(error)
        }
    }

    static verifylogin= async(req,res)=>{
        // console.log('ram')
        
    try {
        // console.log(req.body)
        const { email, password } = req.body;
        // console.log(req.body)
        if (email && password) {
          const user = await UserModal.findOne({ email: email })
    //   console.log(user)
    
          if (user != null) { 
            const isMatched = await brcypt.compare(password, user.password)
            if ( isMatched) {
                // generate token
                const token = jwt.sign({ ID: user._id }, 'Ramsita@108000000');
                // console.log(token) 
                res.cookie('token',token)
                res.redirect('/home')
                
              
              
            } else {
              req.flash('error', 'Email or password is not valid')
              return res.redirect('/login')
            }
          } else {
            req.flash('error', 'You are not a registered user')
            return res.redirect('/login')
          }
        } else {
          req.flash('error', 'All Fields Required')
          return res.redirect('/login')
        }
      } 
    
      catch(error){
        console.log(error)
      }
    
    
    
    
    }   

    static logout=async(req,res)=>{
        try{
            // console.log("hello")
            res.clearCookie('token')
      res.redirect('/')
        }catch(error){
        console.log(error) 
        }
    }

    static updateprofile=async(req,res)=>{
        try{
            
            const{id}=req.data1
          
            const { firstname, lastname, email} = req.body
            
            const user = await UserModal.findById(id)
            if (req.files){
        // const user = await UserModal.findOne({ email: email })
        // const user = await UserModal.findById(req.body.email);
        const image_id = user.image.public_id;
        await cloudinary.uploader.destroy(image_id);
    
        const file = req.files.image;  
        const myimage = await cloudinary.uploader.upload(file.tempFilePath, { 
            folder: "profileimage",
    
        });
        var data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            image: {
                public_id: myimage.public_id,
                url: myimage.secure_url,
            },
        };
    } else {
        var data = {
            firstname: req.body.firstname, 
            lastname: req.body.lastname,
            email: req.body.email,
    
        }
        // console.log(email)
    }
    const update_profile = await UserModal.findByIdAndUpdate(id, data)
   
    res.redirect('/profile')
            
    //   res.redirect('/') 
        }catch(error){
            console.log(error) 
        }
    }
    static updatepassword=async(req,res)=>{
        try{
            // console.log("hello ji")
            // res.render()
            const{firstname,lastname,email,image,_id}=req.data1
            // const data= await UserModal.findById(req.body._id)
            // console.log(req.body)
            const user = await UserModal.findOne({ email: email })
            const { old_password, new_password, cpassword } = req.body;
          if (old_password && new_password && cpassword) {
            const user = await UserModal.findById(_id);
            const ismatch = await brcypt.compare(old_password, user.password);
            if (!ismatch) {
              req.flash("error", "Old password is incorrect.");
              
            return res.redirect("/profile/_id");
            } else {
              if (new_password !== cpassword) {
                req.flash("error", "Password and confirm password do not match.");
        
                return res.redirect("/profile/_id");
              } else {
                const newHashpassword = await brcypt.hash(new_password, 10);
                await UserModal.findByIdAndUpdate(_id, {
                  $set: { password: newHashpassword },
                });
                req.flash(
                  "success",
                  "Password changed successfully. Please log in with your new password."
                );
               
                return res.redirect("/logout");
                
              }
            }
          } else {
            req.flash("error", "All fields are required.");
            
          
            return res.redirect("/profile/_id");
          }
    
    //   res.redirect('/')
        }catch(error){
            console.log(error)
        }
    }
    static resumeform=async(req,res)=>{
        try{
            const {token}=req.cookies 
            let y="ResumeForm";
          
            const data1 = req.params.data1;
                const data2 = req.params.data2;
                
                // console.log(data1)
                // console.log(data2)
            res.render("indexform",{link1:data1,link2:data2,x:y})
           
        }catch(error){ 
             console.log(error)
        }
    }
    static resumeforminsert=async(req,res)=>{
        try{
            const {token}=req.cookies 
            const{_id}=req.data1
            // const user = await resumeModal.findById(user_id)
            const user =await resumeModal.findOne({user_id:_id})
            
            // console.log(_id)
            // console.log("nankldfnk")
            // console.log(user)
             if(req.files){
                
                if( user && user.user_id   ){
                    // console.log("user")
                    // console.log(user)
                    const image_id = user.image.public_id;
                    await cloudinary.uploader.destroy(image_id);
    
                    const file = req.files.image;  
                    const myimage = await cloudinary.uploader.upload(file.tempFilePath, { 
                        folder: "resumeimage",
                
                    });
                    var data = {
                        image: {
                            public_id: myimage.public_id,
                            url: myimage.secure_url,
                        },
                    };
                    const updatedUser = await resumeModal.findOneAndUpdate({user_id:_id},data);
                }else{
                    const file = req.files.image;  
                    const myimage = await cloudinary.uploader.upload(file.tempFilePath, { 
                        folder: "resumeimage",
                
                    });
                    const data = new resumeModal({
                        
                        user_id:_id,
                        image: {
                            public_id: myimage.public_id,
                            url: myimage.secure_url
                        }
                    });
                    await data.save()
                }
                   
             }else{

             }
          
                // console.log(email)
            
            // console.log(data)

            const data1 = req.params.data1;
                const data2 = req.params.data2;
            // const update_image = await resumeModal.findByIdAndUpdate(id, data)
            let template_url=`/${data1}/${data2}`
             res.redirect(template_url)
        }catch(error){ 
             console.log(error)
        }
    }
    static template1=async(req,res)=>{
        try{
            const{_id}=req.data1
            const d =await resumeModal.findOne({user_id:_id})
            let y=" ResumeCraft - Craft Your Career with ResumeCraft!";
            const img=d.image;
        //    console.log(d)
        //    console.log(img)
            res.render("resume_templates/template1",{image:img,x:y})
          
    
        }catch(error){ 
             console.log(error)
        }
    }
    static template2=async(req,res)=>{
        try{
            let y=" ResumeCraft - Craft Your Career with ResumeCraft!";
            res.render("resume_templates/template2",{x:y})
        }catch(error){ 
             console.log(error)
        }
    }

}



module.exports = usercontroller;



//   '${email}'