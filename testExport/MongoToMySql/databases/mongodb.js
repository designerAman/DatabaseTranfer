const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testExportToMySql');

let schema = mongoose.Schema({
    id: Number,
    name: String, 
    age: Number
});

const User = mongoose.model('user', schema);

const addData = async () => {
    for(let i=6; i<11; i++) {
        let user = await new User({
            id: i,
            name: `Aman${i}`,
            age: 22
        })
    
        user.save();
    }
    console.log('data added');
}

addData();

module.exports = User;