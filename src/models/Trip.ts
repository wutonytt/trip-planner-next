import mongoose from "mongoose";

const { Schema } = mongoose;

const tripSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    desc: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Trip || mongoose.model("Trip", tripSchema);
