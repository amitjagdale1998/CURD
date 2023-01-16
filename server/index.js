import express from 'express';
import  bodyparser  from 'body-parser';
import connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import cors from 'cors';
 const PORT= 5000;
const app=express();

dotenv.config();
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
connection(username,password);

app.listen(PORT,()=>console.log(`server starated sucessfully ${PORT}`));
