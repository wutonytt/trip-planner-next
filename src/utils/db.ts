import mongoose, { Error } from "mongoose";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {
    console.log(error);
    throw error as Error;
  }
};

export default connect;
