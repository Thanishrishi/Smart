const express = require('express');

const router = express.Router();
const mongoose = require("mongoose");
const registeredUsers = require('../models/registeredUsers')
require('dotenv').config();



router.post('/transfer', (req, res) => {
    let { username, reciepent, amount } = req.body;
    registeredUsers.findOne({ Username: username })
        .then((saveduser) => {
            let senderamount = saveduser.Wallet;
            if (amount <= senderamount) {
                registeredUsers.findOne({ Username: reciepent })
                    .then((saveduser) => {
                        if (saveduser) {
                            let reciepentamount = saveduser.Wallet;
                            console.log(reciepentamount)
                            reciepentamount = reciepentamount +  parseInt(amount);
                            console.log(reciepentamount);
                            senderamount = senderamount - amount;
                            console.log(senderamount);
                            registeredUsers.updateOne({ Username: username }, { Wallet: senderamount }, (err, docs) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log("updated " + docs);
                                }
                            })
                            registeredUsers.updateOne({ Username: reciepent }, { Wallet: reciepentamount }, (err, docs) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log("updated " + docs);
                                }
                            })
                            res.send("True")
                            return;
                        } else {
                            res.send("RECIEPENTNOTFOUND");
                            return;
                        }
                    })
            } else {
                res.send("INSUFFICIENT")
                return;
            }
        })
})

module.exports = router;