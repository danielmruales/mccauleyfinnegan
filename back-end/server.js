const express = require('express');
const App = express();
require('dotenv').config();
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const port = process.env.port || 5500

App.use(express.json())
App.use('/api', expressJwt({secret: process.env.SECRET}));

App.use('/contact', require('./routes/contactRoute.js'))
// App.use('/photography', require('./routes/photographyRoute.js'))



mongoose.connect('mongodb://localhost:27017/mcfinnegan', {useNewUrlParser: true})
.then(console.log('Success!!'))
.catch(err=> console.log(err))

App.use((err, req, res)=>{
    console.log(err);
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({
        message: err.message
    })
})

App.listen(port, ()=> console.log(`Running on ${port}`));