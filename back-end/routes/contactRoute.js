const express = require('express');
const contactRoute = express.Router();

const contact = require('../models/contactSchema.js')

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


contactRoute.route('/:_id')

.get((req, res) => {
    const {id} = req.params;
    contact.findById(id, (err, found) => {
        err ? res.status(500).send(err) : res.status(200).send(found)
    })
})

.delete((req, res) => {
    const{_id} = req.params;
    contact.findOneAndDelete(_id, err => {
        err ? res.status(500).send(err) : res.status(200).send('Successfully Deleted!')
    })
})



module.exports = contactRoute