const router = require ("express").Router();
const User=require("../models/user");
router.post("/sign-up",async(req,res)=>{
    try{
`       const{username,email,password,address}=req.body;`
       if(username.length<4){
        return res
        .status(400)

        .json({message:"Usrname length should be greater than 3"});
       }

       const existingUsername= await User.findOne({username:username});
       if(existingUsername){
        return res
        .status(400)
        .json({message:"Usrname already exists"});
       }
      
       const existingEmail= await User.findOne({email:email});
       if(existingEmail){
        return res
        .status(400)
        .json({message:"Email already exists"});
       }
       
       if(password.length<=5){
        return res
        .status (400)
        .json({message:"Password's length should be greater than 5"});
       }

       const newUser=new User({
        username:username,
        email:email,
    password:password,
address:address,
});
  await newUser.save();
  return res.status(200).json({message:"SignUp Successfully"});
    }
    catch(error){
      res.status(500).json({message:"Internal server error"});
    }
});
module.exports=router;
