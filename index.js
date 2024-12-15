const express=require("express");
require('dotenv').config();
const connectDB=require('./src/utils/db_mongo');
const router = require("./src/api/routers/routes");
connectDB();


const server=express();
server.use(express.json());
const PORT=process.env.PORT;

server.use("/", router);

server.listen(PORT, ()=>{
    console.log("Server running...");
});