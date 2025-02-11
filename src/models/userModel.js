const pool = require ("../config/db.js");

  getAllUsersService = async () => {

    const result = pool.query("SELECT * FROM users");
    return result.rows;
    
}

 getUserByIdService = async (id) => {

    const result = pool.query("SELECT * FROM users WHERE id = $1",[id]);
    return result.rows[0];
    
}
 updateUserService = async (name,email,id) => {
    const result = await pool.query("UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *",[name, email, id]);
    return results.rows[0];
    
}
 deleteUserService = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id=$1 RETURNING *",[id]);

    return results.rows[0];
    
    
}
  CreateUserService = async (email,name) => {

    const result = await pool.query("INSERT INTO users (name, email) VALUES ($1,$2) RETURNING *",[name,email]);
    return result.rows[0];

}



module.exports ={CreateUserService,deleteUserService,updateUserService,getAllUsersService,getUserByIdService};