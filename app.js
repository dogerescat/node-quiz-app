const express = require('express');
const app = express();
const path = require('path');
const router = require('./router');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

app.use('/', router);

app.listen(3000);
