const { Router } = require("express");
const PaySalle = require("../models/PaySalle");

const router = Router();


router.post('/', async(req, res) => {
    try {
        const newPayment = new PaySalle(req.body);
            const Paycreate = await newPayment.save();
            if (!Paycreate) throw new Error('Pay creation opperation failed !');
            console.log(Paycreate)
            res.status(200).json(Paycreate);
    } catch (err) {
            console.log(err)
            res.status(500).json({ message: err.message })
        }
});

//------------ export module ---------------
module.exports = router;
