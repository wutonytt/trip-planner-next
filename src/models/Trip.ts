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
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    image: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    itinerary: [
      {
        date: {
          type: Date,
          required: true,
        },
        items: [
          {
            item_name: {
              type: String,
              required: true,
            },
            item_type: {
              type: String,
              required: true,
            },
            item_time: {
              type: Date,
              required: true,
            },
            item_desc: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Trip || mongoose.model("Trip", tripSchema);
