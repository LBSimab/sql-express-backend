// standard response function

  var userServices = require("../models/userModel.js");
 

const handleResposne  = (res,status,message,data=null)=>{
    res.status(status).json({
        status,
        message,
        data


    })


}

 createUser = async (req,res,next) => {
    const {name,email}= req.body;
    try {
        const newUser = await userServices.CreateUserService(name,email);
        handleResposne(res,201,"user Created succesfuly",newUser.rows[0]);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
        
    }

    
    
}


 getAllUsers = async (req,res,next) => {
    
    try {
        const users = await userServices.getAllUsersService();
        handleResposne(res,200,"users fetched  succesfuly",users.rows);
        
        
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
    }

    
    
}



 getUserById = async (req,res,next) => {
    
    try {
        const id = req.params.id;
        const user = await userServices.getUserByIdService(id);
     

        if(!user)return handleResposne(res,404,`user with this ${id} didnt exist`)
            handleResposne(res,200,"user fetched  succesfuly",user.rows[0]);
        
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
    }

    
    
}





 updateUser = async (req,res,next) => {
    
    try {
        const  {email,name} = req.body
        const updatedUser = await userServices.updateUserService(name,email,req.params.id);
     

        if(!updatedUser)return handleResposne(res,404,`user not found!`)
            handleResposne(res,200,"user updated  succesfuly",updatedUser.rows[0]);
        
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
    }

    
    
}



 deleteUser = async (req,res,next) => {
    
    try {
        
        const deletededUser = await userServices.deleteUserService(req.params.id);
     

        if(!deletededUser)return handleResposne(res,404,`user not found!`)
            handleResposne(res,200,"user Deleted  succesfuly",deletededUser.rows[0]);
        
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
    }

    
    
}




module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
