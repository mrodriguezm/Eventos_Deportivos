const mongoose=require("mongoose");

const Schema = mongoose.Schema;

const eventSchema= new Schema({
    nombre:{type:String,require:true},
    descripcion:{type:Text, require:true},
    fecha:{type:Date, require:true},
    ubicacion:{type:String, require:true},
    tipoDeporte:{type:String, require:true},
    organizador:{type:String, require:true}
},{
    collection:'events',
    timestamps:true
});

const Events=mongoose.model("events", eventSchema);
module.exports=Events;