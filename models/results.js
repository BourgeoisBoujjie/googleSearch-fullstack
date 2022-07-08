const mongoose = require('mongoose')
const { router } = require('../app')

// Create the results moodel
mongoose.model('products', {
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
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }]
  })