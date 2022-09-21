const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(fileUpload());

var registerController = require('./controllers/registerController');
var loginController = require('./controllers/loginController');
var centerController = require('./controllers/centerController');
var studentController = require('./controllers/studentController');
var fileUploadController = require('./controllers/fileUploadController');

app.use(cors({ origin: 'http://localhost:4200' }));

app.get('/', (req, res)=> {
    res.send('Hello from server')
});

app.listen(PORT, err=> {
    if(err) {
        console.log('error: ', err);
    } else {
        console.log('server is running on localhost ', PORT);
    }
});

app.use('/register', registerController);
app.use('/login', loginController);
app.use('/center', centerController);
app.use('/home', studentController);
app.use('/file-upload', fileUploadController);