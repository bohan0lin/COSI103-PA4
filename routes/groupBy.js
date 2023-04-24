const express = require("express");
const router = express.Router();
const transaction = require("../models/transaction");

router.get("/groupBy", async (req, res, next) => {
    let results = await transaction.aggregate(
        [{$group:{
            _id:'$category',
            amount:{$sum:'$amount'}
        }}]
    )
    res.render('groupBy',{ title: "Transactions summed by category", results})
});
module.exports = router;