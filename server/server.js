//Importing all the dependencies we are using in our software
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { client, connectDB } = require("./config/db");

//Importing our Guest Router function which creates the guest router
const createGuestsRouter = require("./routes/guestsRoutes");

//This allows us to use .env in this file
dotenv.config()

//This creates the basis for our server
const app = express();

//Not sure what cors does 
app.use(cors());
app.use(express.json());

//This sets the varibale PORT to the evn PORT or 5002
const PORT = process.env.PORT||5002;

//This runs the function which connects the MongoDB database
connectDB();

//Here, we're assiging the db and colleciton to variables to make them easier to access
const db = client.db("wedding_guest_app");
const guests = db.collection("guests");

//We are calling the createGuestRouter function and saving it to the variable guestRoutes. Then we call the Route for any urls "/api/guests"
const guestRoutes = createGuestsRouter(guests);
app.use("/api/guests", guestRoutes)

//This starts the server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`);
    console.log(`http://localhost:${PORT}/`)
});

