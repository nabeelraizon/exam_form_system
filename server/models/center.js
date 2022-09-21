const mongoose = require('mongoose');

const Center = mongoose.model('Center', 
{
    centerName: {type: String},
    centerAddress: {type: String},
    centerIncharge: {type: String},
    inchargeContact: {type: String},
    availableSeats: {type: String},
    totalSeats: {type: String}
});

module.exports = {Center};