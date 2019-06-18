const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    _id: Number,
    headline: String,
    article: String,
    image: String
}, { collection: 'news' });

module.exports = mongoose.model('routes', newsSchema)