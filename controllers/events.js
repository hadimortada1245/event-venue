const con=require("../config/connection");
const add=async(req,res)=>{
    try{
        const {title,date,ticketPrice,description,venueId}=req.body;
        const query=`INSERT INTO events (title,date,ticketPrice,description,venueId)
        VALUES ('${title}','${date}',${ticketPrice},'${description}',${venueId})`
        const [result]=con.promise().query(query);
        if(!result)throw Error("An error occured during adding an event ");
        res.status(200).json({message:"Adding event successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to add an event"})
    }
}
const deleteOne=async(req,res)=>{
    try{
        const query=`DELETE FROM events WHERE id =${req.params.id}`
        const [result]=con.promise().query(query);
        if(!result)throw Error("An error occured during deleting an event ");
        res.status(200).json({message:"An event deleted successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to delete an event"})
    }
}
const update=async(req,res)=>{
    try{
    const {title,date,ticketPrice,description,venueId}=req.body;
        const query=`UPDATE events SET title='${title}',date='${date}',ticketPrice=${ticketPrice},description='${description}',venueId=${venueId} WHERE id=${req.params.id}`;
        const [result]=con.promise().query(query);
        if(!result)throw Error("An error occured during updating an event ");
        res.status(200).json({message:"Updating an event successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to update this event"})
    }
}
const getAll=async(req,res)=>{
    try{
        const query=`SELECT * FROM events`;
        const [result]=con.promise().query(query);
        if(!result)throw Error("An error occured during selecting events ");
        res.status(200).json({message:"Selecting all events successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to select events"})
    }
}
const getOneById=async(req,res)=>{
    try{
        const query=`SELECT * FROM events WHERE id =${req.params.id}`
        const [result]=con.promise().query();
        if(!result)throw Error("An error occured during  selecting one user");
        res.status(200).json({message:"Selecting one user successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to select one user"});
    }
}
const deleteOneById=async(req,res)=>{
    try{
        const query=`DELETE FROM events WHERE id =${req.params.id}`
        const [result]=con.promise().query();
        if(!result)throw Error("An error occured during deleting a event");
        res.status(200).json({message:"Deleting one event sucessfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to delete the user"});
    }
}
module.exports={add,deleteOne,update,getAll,getOneById};