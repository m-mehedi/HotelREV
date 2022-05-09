import "dotenv/config"
import express from "express"
import mongoose from "mongoose";
const app = express()

app.use(express.json())

// App imports
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to DB.");
    } catch (error) {
        throw error;
    }
    mongoose.connection.on("disconnected", () => {
        console.log("Database server disconnected!");
    });
};

// middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.get("/", (req, res) => {
    res.send("Welcome!");
})

app.listen(process.env.PORT, () => {
    connect()
    console.log(`Application is running on port ${process.env.PORT}`)
});