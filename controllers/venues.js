const con=require("../config/connection");
const add=async(req,res)=>{
    try{
        const {name,description,capacity,image,address}=req.body;
        const query=`INSERT INTO venues (name,description,capacity,image,address)
        VALUES ('${name}','${description}',${capacity},'${image}','${address}')`
        const [result]=con.promise().query(query);
        if(!result)throw Error("An error occured during adding a venue ");
        res.status(200).json({message:"Adding a venue successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to add a venue"})
    }
}
const deleteOne=async(req,res)=>{
    try{
        const query=`DELETE FROM venues WHERE id =${req.params.id}`
        const [result]=con.promise().query(query);
        if(!result)throw Error("An error occured during deleting a venue ");
        res.status(200).json({message:"A venue deleted successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to delete a venue"})
    }
}
const update=async(req,res)=>{
    try{
        const {name,description,capacity,image,address}=req.body;
        const query=`UPDATE venues SET name='${name}',description='${description}',capacity=${capacity},image='${image}',address='${address}' WHERE id=${req.params.id}`;
        const [result]=con.promise().query(query);
        if(!result)throw Error("An error occured during updating a venue ");
        res.status(200).json({message:"Updating a venue successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to update this venue"})
    }
}
const getAll=async(req,res)=>{
    try{
        const query=`SELECT * FROM venues`;
        const [result]=con.promise().query(query);
        if(!result)throw Error("An error occured during selecting venues ");
        res.status(200).json({message:"Selecting all venues successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to select events"})
    }
}
const getOneById=async(req,res)=>{
    try{
        const query=`SELECT * FROM venues WHERE id =${req.params.id}`
        const [result]=con.promise().query();
        if(!result)throw Error("An error occured during  selecting one venue");
        res.status(200).json({message:"Selecting one venue successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed to select one venue"});
    }
}

module.exports={add,deleteOne,update,getAll,getOneById};