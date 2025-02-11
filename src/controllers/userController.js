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
    const {name,email}=req.body;
    try {
        const newUser = await userServices.CreateUserService(name,email);
        handleResposne(res,201,"user Created succesfuly",newUser);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
        
    }

    
    
}


 getAllUsers = async (req,res,next) => {
    
    try {
        const users = await userServices.getAllUsersService();
        handleResposne(res,200,"users fetched  succesfuly",users);
        
        
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
    }

    
    
}



 getUserById = async (req,res,next) => {
    const {name,email}=req.body;
    try {
        const id = req.params.id;
        const user = await userServices.getUserByIdService(id);
     

        if(!users)return handleResposne(res,404,`user with this ${id} didnt exist`)
            handleResposne(res,200,"user fetched  succesfuly",users);
        
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
    }

    
    
}





 updateUser = async (req,res,next) => {
    const {name,email}=req.body;
    try {
        const  {email,name} = req.body
        const updatedUser = await userServices.updateUserService(req.params.id,name,email);
     

        if(!users)return handleResposne(res,404,`user not found!`)
            handleResposne(res,200,"user updated  succesfuly",updateUser);
        
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
    }

    
    
}



 deleteUser = async (req,res,next) => {
    
    try {
        
        const deletededUser = await userServices.deleteUserService(req.params.id);
     

        if(!users)return handleResposne(res,404,`user not found!`)
            handleResposne(res,200,"user Deleted  succesfuly",deletededUser);
        
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({message:"something went wrong!"});
        next(error);
    }

    
    
}




module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
