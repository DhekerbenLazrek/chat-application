const dotenv = require('dotenv');
dotenv.config();
require('dotenv').config({path:"./.env"});
module.exports = {
    GOOGLE_CONFIG: {
        clientID: "766284901009-addbg5mgubtrnv5doie939saihjsr530.apps.googleusercontent.com",
        clientSecret: "LhNiJw8ZqbyWw64-Fzkdyt1i",
        callbackURL: '/api/auth/google/redirect',
        passReqToCallback: true,
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    },
    FACEBOOK_CONFIG: {
        clientID: "2599125657002783",
        clientSecret: "bb2ff8ece7f15a10f5d1cedce0d20e20",
        callbackURL: '/api/auth/facebook/redirect',
        passReqToCallback: true,
        profileFields: ['id', 'displayName', 'name', 'gender', 'emails', 'picture.type(large)']
    },
    
    mongoUri: "mongodb+srv://dbuser:dbuser@cluster100.uh2u5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    PORT: process.env.PORT || 5000,
    
};
