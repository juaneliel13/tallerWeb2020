'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = Schema({
    item: String,
    guests: Number,
    beds: Number,
    baths: Number,
    amenities: [String],
    type: String,
    price: Number,
    city: String,
    occupied: [{arrival: Date, departure: Date}]
})

module.exports = mongoose.model('Department', departmentSchema)