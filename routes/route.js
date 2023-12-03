const express = require('express');
const router = express.Router();
const test = require("../models/testModel");


router.get("/employees", async function (req, res) {
    try {
        const testMan = await test.find();
        res.status(200).json({
            success: true,
            testMan
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/employees/:id", async function (req, res) {
    try {
        const ID = req.params.id;
        const testMan = await test.findById(ID);

        if (!testMan) {
            return res.status(400).send("Employee not found");
        }
        else {
            res.status(200).json({
                success: true,
                testMan
            });
        }
    } catch (error) {
        res.status(400).send(error.message);
    }


});

router.put("/employees/:id", async function (req, res) {
    try {
        const ID = req.params.id;
        const testMan = await test.findByIdAndUpdate(ID, req.body, { new: true });

        if (!testMan) {
            return res.status(400).send("Employee not found");
        }

        res.status(200).json({
            success: true,
            testMan
        });
    } catch (error) {
        res.status(400).send(error.message);
    }

});

router.delete("/employees/:id",async function (req, res) {

    try {
        const ID = req.params.id;
        const testMan = await test.findByIdAndDelete(ID);

        if (!testMan) {
            return res.status(400).send("Employee not found");
        }

        res.status(200).json({
            success: true,
            testMan
        });
    } catch (error) {
        res.status(400).send(error.message);
    }

});

router.post("/employee", async function (req, res) {
    try {
        const testMan = await test.create(req.body);

        res.status(201).json({
            success: true,
            testMan
        });

    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;

