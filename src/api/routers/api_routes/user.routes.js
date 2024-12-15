const express=require("express");
const router=express.Router();
const {login, registerUser, getProfile}=require("../../controllers/user.controller");

const {checkToken}=require("../../middleware/auth");


router.post("/login",login);
router.post("/register", registerUser);
router.get("/profile", checkToken, getProfile);

module.exports=router;