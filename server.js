const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const feed = require('feed').Feed;
const routes = require('./routes/routes');
// const News = require('./models/news');

const app = express();

app.use(logger('dev'));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(express.static(process.cwd() + '/public'));

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on PORT' + port);
}) ;
    
// app.use('/', routes);
    
mongoose.connect('mongodb://localhost/newsfeed_app');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('Connected to Mongoose!');
});

// , {
//      useNewUrlParser: true
// }).then(function() {
//     console.log('Database connected. ');
// });
