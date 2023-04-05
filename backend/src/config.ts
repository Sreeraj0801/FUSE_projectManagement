import dotenv from 'dotenv';
dotenv.config({path:"config.env"});

const configKeys = {
    mongoDbUrl:process.env.DATABASE as string ,
    port:process.env.PORT_NUMBER ,
    nodeEnv:process.env.NODE_ENV

}

export default configKeys