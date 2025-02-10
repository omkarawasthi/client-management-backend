import express from "express";
import cors from "cors";
import { Connection }  from "./databases/databases.js";
import UserRoutes from "./routes/UserRoutes.js";
import EventRoutes from "./routes/EventRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"https://client-management-frontend.vercel.app",
    credentials:true,
})
)

app.use('/api/v1', UserRoutes);
app.use('/api/v1', EventRoutes);


Connection();


app.listen(process.env.PORT, () => {
    console.log("server started on port 5000");
});