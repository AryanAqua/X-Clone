import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


//Routes import
import authRoute from "./routes/auth.route.js";
import connectMongoDB from "./db/connectMongoDB.js";


dotenv.config(); //env config

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse all the value from req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectMongoDB();
});
