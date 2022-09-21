const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from fileUpload section')
});

router.post('/', (req, res) => {
    
    let uploadPath;
    let sampleFile;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    sampleFile = req.files.file;
    uploadPath = '../server/uploads/' + sampleFile.name;
    sampleFile.mv(uploadPath, function(err) {
        if(err) {
            return res.status(500).send(err);
        }
        res.send('file uploaded to:' + uploadPath);
    });

})

module.exports = router;