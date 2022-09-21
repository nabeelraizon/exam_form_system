const express = require('express');
const router = express.Router();

const {Student} = require('../models/student');

router.get('/', (req, res)=> {
    Student.find((err, docs)=> {
        if(err) {
            console.log('error: ', err);
        } else {
            res.send(docs);
        }
    })
});

router.post('/', (req, res)=> {
    var studentData = new Student({
    fname: req.body.fname,
    mname: req.body.mname,
    lname: req.body.lname,
    fathersName: req.body.fathersName,
    mothersName: req.body.mothersName,
    dob: req.body.dob,
    gender: req.body.gender,
    nationality: req.body.nationality,
    caste: req.body.caste,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    ssExamination: req.body.ssExamination,
    ssBoard: req.body.ssBoard,
    ssSubject: req.body.ssSubject,
    ssYear: req.body.ssYear,
    ssPercentage: req.body.ssPercentage,
    hsExamination: req.body.hsExamination,
    hsBoard: req.body.hsBoard,
    hsSubject: req.body.hsSubject,
    hsYear: req.body.hsYear,
    hsPercentage: req.body.hsPercentage,
    applyFor: req.body.applyFor,
    stream: req.body.stream,
    medium: req.body.medium,
    centerCity: req.body.centerCity,
    centerName: req.body.centerName,
    });
    studentData.save((err, registeredStudent)=> {
        if(err) {
            console.log('error: ', err);
        } else {
            res.status(200).send(registeredStudent);
        }
    })
})

module.exports = router;