const express = require('express');
const app = express();
const mongoose = require('mongoose');
const feed = require('feed').Feed;
const PORT = 3000

app.use(express.json())