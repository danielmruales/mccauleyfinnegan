const express = require('express');
const photographyRoute = express.Router();

const pic = require('../models/picSchema.js')

photographyRoute.route('/')

.get((req, res) => {
    pic.find((err, found) => err ? res.status(500).send(err) : res.status(200).send(found))
})

.post((req, res) => {
    const newPic = new pic(req.body);
    newPic.save(err => {
        err ? res.status(500).send(err) : res.status(200).send(newPic)
    })
})

// picsRoute.route('/:id')