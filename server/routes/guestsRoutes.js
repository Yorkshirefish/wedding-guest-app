const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");

const createGuestsRouter = (guestCollection) => {

    router.get("/", async (req, res) => {
        const allGuests = await guestCollection.find().toArray();

        res.status(200).json(allGuests);
    })

    return router;
}

module.exports = createGuestsRouter