const Users=require("../models/user.model");
const bcript=require("bcryptjs");
const jwt=require("../../utils/jwt");

const login=async (req,res) => {
    try {
        const {nombre, password, rol}=req.body;

        const userDB=await Users.findOne({nombre});

        if(!userDB){
            return res.json({message:"el usuario no existe"});
        }

        const same = await bcript.compare(password, userDB.password);

        if(!same){
            return res.json({message:"La contraseña es incorrecta"});
        }

        return res.json({
            message:"Login correcto",
            token:jwt.createToken(userDB)
        })
    } catch (error) {
        console.log(error);
    }
}

const registerUser=async (req,res) => {
    try {
        const user=new Users(req.body);


        const userDB=await Users.find({nombre:user.nombre});

        

        if(!userDB){
            return res.json({message:"Este nombre de usuario ya esta en uso"});
        }

        user.password=await bcript.hash(user.password, 10);
        const newUser= await Users.create(user);

        return res.json(newUser);
    
        
    
    } catch (error) {
        console.log(error);
    }
}

const getProfile=async (req,res) => {

    const user= await Users.find({nombre:req.user.nombre});
    

    return res.json({msg:"usuario autorizado",
        data:user
    });
}

module.exports={login, registerUser, getProfile};