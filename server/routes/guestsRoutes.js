const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");

const createGuestsRouter = (guestCollection) => {

    //Works - Tested
    router.get("/", async (req, res) => {
        const allGuests = await guestCollection.find().toArray();

        res.status(200).json(allGuests);
    })

    //Works - Tested
    router.post("/", async (req,res) => {
        const guest = req.body;

        const result = await guestCollection.insertOne(guest);

        guest._id = result.insertedId;

        res.status(201).json(guest)
    })

    router.put("/:id", async (req, res) => {

        const result = await guestCollection.updateOne({_id: new ObjectId(req.params.id)}, {$set: req.body});
        res.json(req.body);
    })

    //Works - Tested
    router.delete("/:id", async (req, res) => {

        const result = await guestCollection.deleteOne({_id: new ObjectId(req.params.id)})
        res.status(204).send();
    })

    return router;
}

module.exports = createGuestsRouter