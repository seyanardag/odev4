const mongoose = require('mongoose')

module.exports = () => {

    mongoose.connect('mongodb://localhost:27017/test');
    mongoose.connection.on("open",()=>{console.log('mongoDB conndected')})
    mongoose.connection.on("error",(err)=>{console.log('mongoDB FAILED error:', err)})
}
