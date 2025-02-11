const express = require("express");
const bodyParser = require("body-parser");

const errorHandler = require("./middlewares/errorHandler.js");

const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db");
const createuserTable = require("./data/createUserTable");
const router = require("./routes/userRoutes.js");

dotenv.config();

const app   = express();
const port = process.env.PORT||3001;

//middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use("/api",router)

//testing POSTGRES CONNECTION 
app.get("/",async(req,res)=>{
    console.log("start");
    const result = await pool.query("SELECT current_database()");
    console.log("end");
res.send(`the database name is ${result.rows[0].current_database}`);
})

//routes



//error handling 

app.use(errorHandler)


//creating table postgres before starting server 
createuserTable();

//running server

app.listen(port, () =>{console.log(`server is running on port ${port}`)});
