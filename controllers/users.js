const con=require("../config/connection");
const add=async(req,res)=>{//tested
    try{
        const { fullName ,email ,password ,role }=req.body; 
        const query =`INSERT INTO users (fullName ,email,password ,role) VALUES('${fullName}','${email}','${password}','${role}') `;
        const [result]=await con.promise().query(query);
        if(!result)throw Error("An error occured during adding a user ");
        res.status(200).json({message:"A user added successfully",result});
    }catch(error){
        res.status(500).json({message:"adding this user",error})
    }
}
const updateUserById = async (req, res) => {//tested
    try {
      const {  fullName, email, password, role } = req.body;
      const query = `
        UPDATE users
        SET fullName = '${fullName}', email = '${email}', password = '${password}', 
         role = '${role}'
        WHERE id = ${req.params.id}`;
      const [result] = await con.promise().query(query);
      if (!result) throw new Error("An error occurred during user update");
      res.status(200).json({ message: "User update successful", result });
    } catch (error) {
      res.status(500).json({ message: "Failed updating user", error: error.message });
    }
  };
const getUsers=async(req,res)=>{//tested
    try{
        const result=await con.promise().execute(`SELECT * FROM users`);
        if(!result)throw new Error("An error occured during selecting all users");
        res.status(200).json({message:"Selecting users successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed selecting users",error});
    }
}

const getUserById=async(req,res)=>{//tested
    try{
        const result=await con.promise().query(`SELECT * FROM users WHERE id=${req.params.id}`);
        if(!result)throw new Error("An error occured during selecting one user");
        res.status(200).json({message:"Selecting  one user successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed selecting one user",error});
    }
}

const getUserByRole=async(req,res)=>{//tested
    try{
        const result=await con.promise().query(`SELECT * FROM users WHERE role='${req.params.role}'`);
        if(!result)throw new Error("An error occured during selecting one user");
        res.status(200).json({message:"Selecting   users by role successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed selecting one user",error});
    }
}
const deleteOneById =async(req,res)=>{//tested
    try{
        const result=await con.promise().query(`DELETE FROM users WHERE id=${req.params.id}`);
        if(!result)throw new Error("An error occured during deleting a user");
        res.status(200).json({message:"Deleting user successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed deleting a user"});
    }
}
const login =async(req,res)=>{//tested
    try{
        const [result]=await con.promise().query(`SELECT id ,fullName,email,role FROM  users WHERE email='${req.body.email}' AND password='${req.body.password}'`);
        if(result.length<1)throw new Error("An error occured during deleting a user");
        res.status(200).json({message:"selecting user successfully",result});
    }catch(error){
        res.status(500).json({message:"Failed selecting a user"});
    }
}

module.exports={add,getUsers,login,getUserById,deleteOneById,updateUserById,getUserByRole};