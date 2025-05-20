import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectToDatabase from "./configs/database";
import indexRouter from "./routes/index";
dotenv.config();
//file upload && session && cookie
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/", indexRouter);

(async () => {
  try {
    //test connection
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error: " + error);
  }
})();
