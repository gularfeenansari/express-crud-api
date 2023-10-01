//importing libraries
require('dotenv/config')
const express = require('express');
const app = express();
const router = require('./routes/index') // importing router from routes folder

app.use(express.json()); //middleware parses incoming requests with JSON payloads
app.use(router); 


//creating express server
app.listen(process.env.port,()=>{
    console.log(`Server running at PORT ${process.env.port}`);
})