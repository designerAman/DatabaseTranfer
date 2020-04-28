const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newDb');

let schema = mongoose.Schema({}, {strict:false, unique: true});