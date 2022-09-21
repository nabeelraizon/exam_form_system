const mongoose = require('mongoose');

// const db = "mongodb+srv://dbAdmin:92HDUY0Mhu5JpWOT@cluster0.d0ify.mongodb.net/eemsdb";
 
const db = "mongodb+srv://dbAdmin:Shaera1605@cluster0.d0ify.mongodb.net/eemsdb";

// const  = "mongodb+srv://7869735153:7869735153@cluster0.d0ify.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db, err => {
    if(err) console.log('error while connecting db', err)
    else {
        console.log('successful connected to mongodb');
    }
})

module.exports = mongoose;