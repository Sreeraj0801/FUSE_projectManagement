import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';
import {connectToDatabase} from './Connection/connection'
import * as dotenv from 'dotenv';
const app = express();

connectToDatabase();
dotenv.config()

//----------------------- middleware ------------------------------
 app.use(cors({origin:'http://127.0.0.1:5173',
 methods:["PUT","POST","DELETE","GET","PATCH"],credentials:true}));
// app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('Public'));
app.use(express.json()); 

/* ------------------------ Routes --------------------------------
   # importing Routes and Using It
   ## Import Routes - User
 */
  import UserRouter from './Routes/Users/auth' 

//Using the Routes
app.use('/',UserRouter);



//--------------------- Port Running -----------------------------
app.listen(process.env.PORT_NUMBER,()=>{  
    console.log(`server started at http://localhost:${process.env.PORT_NUMBER}`);
});