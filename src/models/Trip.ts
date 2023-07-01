import mongoose from "mongoose";

const { Schema } = mongoose;

const tripSchema = new Schema(
  {
    title: {
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
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

export default mongoose.models.Trip || mongoose.model("Trip", tripSchema);
