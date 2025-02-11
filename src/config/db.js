  const pkg = require("pg");

  const dotenv = require("dotenv");

  dotenv.config();
  const {Pool} = pkg;
console.log(process.env.DB_PASSWORD);
  const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT

  });

  pool.on("connect",()=>{

    console.log("connection pool stablished")

  });

  module.exports = pool; 
  
