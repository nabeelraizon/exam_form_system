const express = require('express');
const router = express.Router();

const {Center} = require('../models/center');

router.get('/', (req,res) => {
    Center.find((err, docs)=> {
        if(err) {
            console.log('error: ', err);
        } else {
            res.send(docs);
        }
    });
});

module.exports = router;