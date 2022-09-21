const mongoose = require('mongoose');

var User = mongoose.model('User',
{
    name: {type: String},
    dob: {type: String},
    email: {type: String},
    contact: {type: Number},
    password: {type: String},
    cpassword: {type: String}
});

module.exports = {User}