const express = require('express');
const router = express.Router();

const products = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Jack"},
];

router.get("/", function (req, res) {
    res.send("Employees");
});
router.get("/search", function (req, res) {
    res.send("Employee Search");
});

router.get("/employees", function (req, res) {
    res.send(products);
});

router.get("/employees/:index", function (req, res) {
    const index = req.params.index;
    if (!products[index]) {
        return res.status(400).send("Employee not found");
    }
    const productObject = products[index];
    res.send(productObject);
});

router.put("/employees/:index", function (req, res) {
    const index = req.params.index;
    if (!products[index]) {
        return res.status(400).send("Employee not found");
    }

    products[index] = req.body;
    res.send(products[index]);
});

router.delete("/employees/:index", function (req, res) {
    const index = req.params.index;
    if (!products[index]) {
        return res.status(400).send("Employee not found");
    }

    products.splice(index, 1);
    res.send(products);
});

router.post("/employee", function (req, res) {
    const newProduct = req.body;
    const lastIndex = Object.keys(products).length;
    products[lastIndex] = newProduct;
    res.send(products[lastIndex]);
});

module.exports = router;

