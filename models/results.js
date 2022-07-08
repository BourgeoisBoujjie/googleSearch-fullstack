const mongoose = require('mongoose')

// Create the results moodel
let resultMod = mongoose.model('results', {
    title: { 
        type: String,
        required: true },
    description: {
        type: String,
        required: true },
    url: {
        type: String,
        required: true },
    links: [{
        title: {
            type: String,
        },
        url: {
            type: String,
        }
    }]
  })
  module.exports = resultMod