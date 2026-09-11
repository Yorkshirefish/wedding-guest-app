const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT||5002;

app.get("/", (req, res) => {
    res.json("hello world")
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
    console.log(`http://localhost:${PORT}/`)
});

