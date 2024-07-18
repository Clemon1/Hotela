import express from "express";
import * as dotenv from "dotenv";
import { dbConnect } from "./middlewares/dbConnection.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5500;
const API_PATH = "/api/v1";
dbConnect(`${process.env.DB_URL}`);
//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Travel Agency");
});

app.use(`${API_PATH}/user`, userRouter);

app.listen(PORT, () => console.log(`Server listening on PORT:${PORT}`));
