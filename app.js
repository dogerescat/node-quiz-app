const express = require('express');
const app = express();
const request = require('request');
const path = require('path');
const Quiz = require('./quiz.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/quiz', (req, res) => {
  const options = {
    url: 'https://opentdb.com/api.php?amount=10',
    methods: 'GET',
    json: true,
  };
  request(options, (error, response) => {
    const data = response;
    const quiz = new Quiz(data);
    quiz.arrangeData();
    res.json(quiz.returnData());
  });
});

app.listen(3000);
