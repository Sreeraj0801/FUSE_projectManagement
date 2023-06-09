import mongoose from "mongoose"
import configKeys from "../../../config"
mongoose.set('strictQuery',true)


const connectDB = async () => {
  try {
    await mongoose.connect(configKeys.mongo.url)
    console.log(`Database connected successfully`.bg_green)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB