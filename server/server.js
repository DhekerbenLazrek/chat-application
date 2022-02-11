// const dotenv = require("dotenv");
// dotenv.config();

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


const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const helmet = require('helmet');
const enforce = require('express-sslify');
const compression = require('compression');


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);





const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const profileRoutes = require('./routes/profile');

const messageRoutes = require('./routes/messages');


app.use(
    morgan('combined', {
        stream: fs.createWriteStream('logs/access.log', { flags: 'a' })
    })
);
app.use(morgan('dev'));

if (process.env.HEROKU_DEPLOYMENT === 'true') {
    app.enable('trust proxy');
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(helmet());
app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(expressValidator());
app.use(cors());
app.set('io', io);

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/messages', messageRoutes);

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    );
}

let userTypings = {};



/** Serve static assets if production */
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../client', 'dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
    });
}

if (process.env.NODE_ENV !== 'test') {
    server.listen(process.env.PORT || 5000, () => {
        logger.info(`[LOG=SERVER] Server started on port 5000`);
    });
}

module.exports = { app };
