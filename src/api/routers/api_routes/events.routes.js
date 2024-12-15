const express=require("express");
const router=express.Router();
const {checkToken}=require("../../middleware/auth");

const {typeEvents,addEvents, filterdate, getById, updateEvent, deleteEvent, upcomingEvents}=require("../../controllers/events.controller");

router.post("", checkToken, addEvents);
router.get("/:eventId", checkToken,getById);
router.put("/:eventId", checkToken, updateEvent);
router.delete("/:eventId",checkToken, deleteEvent);
router.get("/upcoming",checkToken, upcomingEvents);
router.get("",checkToken, typeEvents);
router.get("/date", checkToken, filterdate);

module.exports=router;