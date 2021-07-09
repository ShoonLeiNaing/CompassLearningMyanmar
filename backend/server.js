import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express()
const PORT = 5000;

//middleware
app.use(bodyParser.json())

//connect to database

//import routes


app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))