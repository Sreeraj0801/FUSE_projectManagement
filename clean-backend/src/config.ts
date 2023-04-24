import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

const configKeys = {
  mongo: {
    url: process.env.DATABASE as string,
    dbName: "",
  },
  server: {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT_NUMBER,
  },
};

export default configKeys;
