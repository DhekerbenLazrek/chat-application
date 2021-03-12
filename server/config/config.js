const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    GOOGLE_CONFIG: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/redirect',
        passReqToCallback: true,
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    },
    FACEBOOK_CONFIG: {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: '/api/auth/facebook/redirect',
        passReqToCallback: true,
        profileFields: ['id', 'displayName', 'name', 'gender', 'emails', 'picture.type(large)']
    },
    endpoint: process.env.API_URL,
    masterKey: process.env.API_KEY,
    mongoUri: "mongodb+srv://dheker:dheker@cluster0.7qccs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    PORT: process.env.PORT || 5000,
    
};
