import mongoose, { Error } from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {
    console.log(error);
    throw error as Error;
  }
};

export default connect;
