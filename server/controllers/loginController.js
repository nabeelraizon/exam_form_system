const express = require('express');
const {User} = require('../models/user');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send('from Login User')
})

router.post('/', (req, res)=> {
    var userData = new User({
        email: req.body.email,
        password: req.body.password
    });
    User.findOne({email: userData.email}, (err, user) => {
        if(err) {console.log(err)}
        else {
            if(!user) {
                res.status(401).send('Invalid Email')
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid Password')
            } else {
                res.status(200).send(user)
            }
        }
    })
})

module.exports = router;