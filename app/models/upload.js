const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const uploadSchema = new Schema({
    imageUrl: {
        type: String,
        required: false
    }
    // videoUrl:{
    //     type: String,
    //     required: true
    // }
}, {
    timestamps: true
})

module.exports = model('Upload', uploadSchema)
