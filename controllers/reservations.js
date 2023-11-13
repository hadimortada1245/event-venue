const con=require("../config/connection");
const add=async(req,res)=>{
    try{
        const { venueId,userId }=req.body; 
        const query =`INSERT INTO reservations (venueId,userId) VALUES(${venueId},${userId}) `;
        const [result]=await con.promise().query(query);
        if(!result)throw Error("An error occured during adding a reservation ");
        res.status(200).json({message:"A reservation added successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed adding this reservation",error})
    }
}
const updateReservation = async (req, res) => {
    try {
        const { venueId,userId }=req.body; 
      const query = `
        UPDATE users
        SET venueId =${venueId} ,userId=${userId}
        WHERE id = ${req.params.id}`;
      const [result] = await con.promise().query(query);
      if (!result) throw new Error("An error occurred during a reservation update");
      res.status(200).json({ message: "Reservation updated successful", result });
    } catch (error) {
      res.status(500).json({ message: "Failed updating a reservation", error: error.message });
    }
  };
const getReservations=async(req,res)=>{
    try{
        const result=await con.promise().execute(`SELECT * FROM reservations`);
        if(!result)throw new Error("An error occured during selecting all reservations");
        res.status(200).json({message:"Selecting reservations successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed selecting reservations",error});
    }
}

const getAllByUserId=async(req,res)=>{
    try{
        const result=await con.promise().query(`SELECT * FROM reservations WHERE userId=${req.params.id}`);
        if(!result)throw new Error("An error occured during reservations by userId");
        res.status(200).json({message:"Selecting  reservations by userId successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed selecting reservations by userId",error});
    }
}
const getAllByVenueId=async(req,res)=>{
    try{
        const result=await con.promise().query(`SELECT * FROM reservations WHERE venueId=${req.params.id}`);
        if(!result)throw new Error("An error occured during selecting reservations by venueId");
        res.status(200).json({message:"Selecting  reservations by venueId successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed selecting reservations by venueId",error});
    }
}
const deleteReservationById =async(req,res)=>{
    try{
        const result=await con.promise().query(`DELETE FROM reservations WHERE id=${req.params.id}`);
        if(!result)throw new Error("An error occured during deleting a row from your reservations table");
        res.status(200).json({message:"Deleting a row from your reservation table successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed deleting a row from your reservation"});
    }
}



module.exports={add,getReservations,deleteReservationById,updateReservation,getAllByVenueId,getAllByUserId};