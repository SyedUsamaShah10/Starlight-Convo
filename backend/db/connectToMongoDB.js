import mongoose from "mongoose";

const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log("Error connecting to mongodb", error.message);
  }
};

export default connectToMongodb;