const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    username: String,
    role: String,
    description: String,



})

module.exports = mongoose.model('admin', userSchema,)