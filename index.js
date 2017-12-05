const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connected to internet', err);
    }else{
        // console.log('Secret Code',config.secret);
        console.log('Connected to database',config.db);
    }
});

app.use(express.static(__dirname +'/client/dist/'));

app.get('/', (req, res) => {
   // res.send('hello world');
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});