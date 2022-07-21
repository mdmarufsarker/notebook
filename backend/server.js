import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connect to mongodb
let MONGO_URI;
if (true)
  MONGO_URI =
    "mongodb+srv://admin:mmsnilanjona@notebook-db.2aq0l.mongodb.net/?retryWrites=true&w=majority";
else MONGO_URI = "mongodb://localhost:27017/notebook";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected..."))
  .catch((err) => console.log("Database Connection Error: " + err));

app.listen(process.env.PORT || 7777, () => {
  console.log(
    `Server is running at http://localhost:${process.env.PORT || 7777}`
  );
});
