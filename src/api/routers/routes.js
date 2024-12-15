const express=require("express");
const router=express.Router();

router.use("/user", require("./api_routes/user.routes"));
router.use("/events", require("./api_routes/events.routes"));

module.exports=router;