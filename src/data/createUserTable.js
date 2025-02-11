const pool = require("../config/db.js");

const createuserTable =async () => {

    const queryText =  `CREATE TABLE IF NOT EXISTS users (
     id SERIAL PRIMARY KEY,
     name varchar(100) NOT NULL,
     email varchar(100) UNIQUE NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
 )`
    try {
        pool.query(queryText);
        console.log("user tabled created if not existed");

    } catch (error) {

        console.log("error creating users table",error)
        
    }
};
module.exports=createuserTable;