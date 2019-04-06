const express = require('express');
const contactRoute = express.Router();

const contact = require('../models/contactSchema')

contactRoute.route('/')

.get((req, res) => {
    contact.find((err, found) => err ? res.status(500).send(err) : res.status(200).send(found))
})

.post((req, res) => {
    const newInfo = new contact(req.body)
    newInfo.save(err => {
        err ? res.status(500).send(err) : res.status(200).send(newInfo)
    })
})

module.exports = contactRoute