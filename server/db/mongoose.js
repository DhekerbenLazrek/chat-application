const mongoose = require('mongoose');
const { logger } = require('../config/logModule');
require('dotenv').config({path:"./.env"});

mongoose.Promise = global.Promise;

const connect = () => {
    mongoose.connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
        err => {
            if (err) {
                logger.error(err);
                return;
            }

            if (process.env.NODE_ENV !== 'test') {
                logger.info('[LOG=DB] Successfully connected to MongoDB');
            }
        }
    );
};

connect();

module.exports = { mongoose, connect };