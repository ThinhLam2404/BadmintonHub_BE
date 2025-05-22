import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import connectToDatabase from "./configs/database";
import indexRouter from "./routes/index";
import cookieSession from "cookie-session";
import { requireAuth } from "./middlewares/require-auth";
import { currentUserMiddleware } from "./middlewares/current-user";
import { NotFoundError } from "./errors";
import errorHandler from "./middlewares/error-handler";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
// app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(currentUserMiddleware);
app.use("/api/", requireAuth, indexRouter);
app.all("*", (req, res, next) => {
  next(new NotFoundError());
});
app.use(errorHandler);

(async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error: " + error);
  }
})();
