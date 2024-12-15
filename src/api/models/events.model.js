const mongoose=require("mongoose");

const Schema = mongoose.Schema;

const eventSchema= new Schema({
    nombre:{type:String,required:true},
    descripcion:{type:String, required:true},
    fecha:{type:Date, required:true},
    ubicacion:{type:String, required:true},
    tipoDeporte:{type:String, required:true},
    organizador:{type:String, required:true}
},{
    collection:'events',
    timestamps:true
});

const Events=mongoose.model("events", eventSchema);
module.exports=Events;