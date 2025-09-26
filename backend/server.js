// server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());



app.get("/", (req, res) => res.send("AI Interview Backend Running ✅"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
