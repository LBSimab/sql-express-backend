const pool = require ("../config/db.js");

  getAllUsersService = async () => {

    const result = pool.query("SELECT * FROM users");
    return result
    
}

 getUserByIdService = async (id) => {

    const result = pool.query("SELECT * FROM users WHERE id=$1",[id]);
    return result
    
}
 updateUserService = async (name,email,id) => {
    const results = await pool.query("UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *",[name, email, id]);
  console.log(results);

    return results
    
}
 deleteUserService = async (id) => {
    const results = await pool.query("DELETE FROM users WHERE id=$1 RETURNING *",[id]);

    return results
    
    
}
  CreateUserService = async (email,name) => {

    const result = await pool.query("INSERT INTO users (email, name) VALUES ($1,$2) RETURNING *",[name,email]);
    return result

}



module.exports ={CreateUserService,deleteUserService,updateUserService,getAllUsersService,getUserByIdService};