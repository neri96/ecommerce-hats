require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 3600000 * 24 * 3 }
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});


app.use((_req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');  
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/hats', require('./routes/hatsRoute'));
app.use('/cart', require('./routes/cartRoute'));
app.use('/auth', require('./routes/authRoute'));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.json(__dirname, '../client/build', 'index.html'));
    })
}

app.listen(process.env.PORT || 5000, () => {
    console.log(`Running on ${process.env.PORT}`);
})