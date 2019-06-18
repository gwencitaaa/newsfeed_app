const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const feed = require('feed').Feed;
const routes = require('./routes/routes');
const News = require('./models/news');
const PORT = 3000

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/newsfeed_app', {
    useNewUrlParser: true
}).then(function() {
    console.log('Database connected. ');
});

app.listen(PORT, () => {
    console.log('Listening on port ${PORT}')
});