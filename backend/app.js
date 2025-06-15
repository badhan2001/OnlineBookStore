const express = require("express");
const app= express();
app.use(express.json());
require("dotenv").config();
require("./conn/conn");
// const UserRoutes=require("./routes/user");

// // app.get("/" ,(req,res) => {
// //     res.send("Hello from backend side");
// // });

// app.use("/api/v1",UserRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server Started at port ${process.env.PORT}`);

});
