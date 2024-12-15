const express=require("express");
const router=express.Router();

router.use("/user", require("./api_routes/user.routes"));

module.exports=router;