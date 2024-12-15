const Events=require("../models/events.model");
const moment=require("moment");

const addEvents=async (req,res) => {
    try {
        
        const newEvent=new Events(req.body);
        newEvent.fecha=moment(newEvent.fecha).format('YYYY-MM-DD');
        newEvent.organizador=process.env.USER_NAME;
        
        
        await newEvent.validate();
        const createEvent=await newEvent.save();

        return res.json({msg:"Evento añadido", data:createEvent})
    } catch (error) {

        return res.status(400).json({ error: "Faltan campos para crear el evento" });
   
    }
}

const getEvents=async (req,res) => {

    try {

        const events=await Events.find();

        return res.json(events);
        
    } catch (error) {
        return res.status(200).json({error:"No se ha podido realizar la llamada"});
    }
    
}

const getById=async (req,res) => {
    
    try{
    const listEvents=await Events.find({_id:req.params.eventId});
    return res.json(listEvents);
    }catch(error){}
}

const updateEvent=async (req,res) => {
    try {
        const newEvent=await Events.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.json(newEvent);
    
    } catch (error) {
        return res.status(404).json({error:"Evento no encontrado"});
    }
}


const deleteEvent=async (req,res) => {
    try {
        const delEvent=await Events.findByIdAndDelete(req.params.id)
        return res.json({msg:"Evento eliminado"});
    } catch (error) {
        return res.status(404).json({error:"Evento no encontrado"});
    }
}


const upcomingEvents=async (req,res) => {
    try {
        
        const datenow = new Date();
        console.log(datenow);
        const listEvents=await Events.find({ fecha: { $gt: datenow } });

        return res.json({msg:"Eventos proximos", data:listEvents});
    } catch (error) {
        return res.status(401).json({error:"No se ha podido realizar la llamada"})
    }
}

const typeEvents=async (req,res) => {
    try {
        const { type } = req.query;

        // Ejecutar la consulta y enviar la respuesta
        const events = await Events.find({tipoDeporte: type});
        return res.json(events);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener los eventos' });
    }
}

const filterdate=async (req,res) => {

    try {
        const {from, to}=req.query;
        const fechainicio=from+"T00:00:00.000+00:00";
        const fechafin=to+"T00:00:00.000+00:00";

        const events=await Events.find({
            fecha: {
                $gt: fechainicio,
                $lt: fechafin
            }
        });

        return res.json(events);
    } catch (error) {
        return res.status(401).json({ message: 'Error al obtener los eventos' });
   
    }
    
}
module.exports={filterdate,typeEvents,addEvents, getEvents, getById, updateEvent, deleteEvent, upcomingEvents}