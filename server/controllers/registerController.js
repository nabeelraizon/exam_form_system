const express = require('express');
const {User} = require('../models/user');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send('from registered User')
})

router.post('/', (req, res)=> {
    var userData = new User({
        name: req.body.name,
        dob: req.body.dob,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password,
        cpassword: req.body.cpassword
    });
    userData.save((err, registeredUser)=> {
        if(err) {
            console.log('error: ', err)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

module.exports = router;