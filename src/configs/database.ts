import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const dbState = [
  { value: 0, label: "Disconnected" },
  { value: 1, label: "Connected" },
  { value: 2, label: "Connecting" },
  { value: 3, label: "Disconnecting" },
];

const connectToDatabase = async () => {
  if (!process.env.MONGODB_URI) throw new Error("MONGO_URI is required");
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const state = Number(mongoose.connection.readyState);
    console.log(
      dbState.find((f) => f.value === state)?.label || "fail to connect ",
      "to db"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectToDatabase;
