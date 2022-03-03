const { PORT } = require("./configg");
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require("dotenv");
require('dotenv').config({path:"./.env"});
dotenv.config();
const app = express();
/** Dotenv Environment Variables */
if (process.env.HEROKU_DEPLOYMENT !== 'true') {
    require('dotenv').config({path:"./.env"});
}


const mongoose = require('mongoose');
require('./db/mongoose');

const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const winston = require('winston');
const { logger } = require('./config/logModule');
const passport = require('passport');
require('./config/passport')(passport);


// const server = require('http').Server(app);


// Setting up basic middleware for all Express requests
app.use(
    morgan('combined', {
        stream: fs.createWriteStream('logs/access.log', { flags: 'a' })
    })
    );
    app.use(morgan('dev'));

// if (process.env.HEROKU_DEPLOYMENT === 'true') {
//     app.enable('trust proxy');
//     app.use(enforce.HTTPS({ trustProtoHeader: true }));
// }

app.use(helmet());
app.use(compression());



app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(express.json());
app.use(passport.initialize());
app.use(expressValidator());
app.use(cors());

// declaring routes
const SalleRoutes = require('./routes/Salles');
const authRoutes = require('./routes/auth');
const UserRoutes = require('./routes/User');
const profileRoutes = require('./routes/profile');
const PaySalleRoutes = require("./routes/PaySalle");

// using api's
app.use('/api/auth', authRoutes);
app.use('/api/User', UserRoutes);
app.use('/api/profile', profileRoutes);
app.use("/api/Salles", SalleRoutes);
app.use('/api/profile', profileRoutes);
app.use("/api/PaySalle", PaySalleRoutes);

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    );
}


/** Serve static assets if production */
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../client', 'dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
    });
}




//  GET AND POST REQUEST 

app.get('/', function(req, res) {
    res.send('Heello')
  })
app.post('/', function(req, res) {
    res.send('Heello this is a successful post request')
})

app.listen(PORT, () => console.log(`LOGGED ON PORT ${PORT}`));
//   app.use(function(req, res, next) {
    //     next(createError(404));
//   });



 
