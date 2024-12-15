const mongoose=require("mongoose");


const Schema = mongoose.Schema;

const userSchema= new Schema({
    nombre:{type:String, require:true},
    password:{type:String, require:true},
    rol:{type:String, enum:["a","u"], default:"u"}
},{
    collection:'usuarios',
    timestamps:true
});

const Users = mongoose.model("usuarios", userSchema);
module.exports=Users;