const env = require("dotenv")
env.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const morgan = require("morgan");
const cors = require("cors")


// middleware use .........................

// this middleware use for http request logger 
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());


app.listen(PORT,()=>{

    console.log(`http://localhost:${PORT}`);
})
