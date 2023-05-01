import mongoose from 'mongoose';
import {MyConnectOptions} from '../Types/connection.types'


const dbOptions: MyConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


export const connectToDatabase = () => {
    mongoose.connect('mongodb+srv://sreeraj0801:fuseofficial@cluster0.8ewjrvu.mongodb.net/test', dbOptions).then(()=>{
      console.log('successfully connected to database');
    }).catch((err)=>{console.log("DataBase Error",err);
    })
  };

