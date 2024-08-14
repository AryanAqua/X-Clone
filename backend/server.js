import express from "express";
import dotenv from "dotenv";

//Routes import
import authRoute from "./routes/auth.route.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config(); //EVN configure

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectMongoDB();
});
