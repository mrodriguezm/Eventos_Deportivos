const jwt = require("jsonwebtoken");
const Users=require("../models/user.model");

const checkToken = async (req, res, next) => {
    try {
        if (!req.headers["authorization"]) {
            return res.json({msg:"No esta autorizado"});
        }

        const token=req.headers['authorization'];

        let data;
        try {
            const tokenVer=token.split(' ')[1];
            data=jwt.verify(tokenVer, process.env.SECRET_KEY_JWT);
            
        } catch (error) {
            return res.json({msg:"el token es incorrecto"});
        }
        

        const user=await Users.findById(data.user_id);


        if(!user){
            return res.json({msg:"el usuario no existe"});
        }

        req.user=user;
        console.log("Bienvenido Usuario"+user.nombre);

        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports={checkToken};