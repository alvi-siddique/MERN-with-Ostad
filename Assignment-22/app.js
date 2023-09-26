const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const limit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const validator = require('validator');

// create express instance 
const app = express();

// implement sequrity/application/third party middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(hpp());
app.use(mongoSanitize());

// express rate limiter  
const limiter = limit({
    windowMs : 1 * 60 * 1000,
    max : 25
});

app.use(limiter);

// router implement 
const { router } = require('./src/routes/api');
app.use ( router )

// client error router 
app.use((req, res, next) =>{
    res.status(404).json({
        status : "Failed",
        data : "Route Not !Found!!!"
    });
    next();
});

// server side error handling and all error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!'); 
})

module.exports = {
    app
}

