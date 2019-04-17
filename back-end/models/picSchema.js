const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picSchema = new Schema ({

    description: String,
    image: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('pics', picSchema)