const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { client, connectDB } = require("./config/db");

const createGuestsRouter = require("./routes/guestsRoutes");

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT||5002;

connectDB();

const db = client.db("wedding_guest_app");
const guests = db.collection("guests");

const guestRoutes = createGuestsRouter(guests);
app.use("/api/guests", guestRoutes)


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
    console.log(`http://localhost:${PORT}/`)
});

