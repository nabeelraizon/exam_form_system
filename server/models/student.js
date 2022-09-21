const mongoose = require('mongoose');

const Student = mongoose.model('Student', 
{
    fname: {type: String},
    mname: {type: String},
    lname: {type: String},
    fathersName: {type: String},
    mothersName: {type: String},
    dob: {type: String},
    gender: {type: String},
    nationality: {type: String},
    caste: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    ssExamination: {type: String},
    ssBoard: {type: String},
    ssSubject: {type: String},
    ssYear: {type: String},
    ssPercentage: {type: Number},
    hsExamination: {type: String},
    hsBoard: {type: String},
    hsSubject: {type: String},
    hsYear: {type: String},
    hsPercentage: {type: Number},
    applyFor: {type: String},
    stream: {type: String},
    medium: {type: String},
    centerCity: {type: String},
    centerName: {type: String}
});

module.exports = {Student};