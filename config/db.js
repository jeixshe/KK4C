// getting-started.js
const mongoose = require('mongoose');

const mongoDB = async function main() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/praktikumkk4c');
        console.log('DB connected')
    } catch (error) {
        console.log(error.message);
    }
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');
}
  
module.exports = mongoDB