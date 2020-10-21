const Quiz = require('../quiz');
const QuestionGetter = require('../question');
const request = require('request-promise');

const quiz = new Quiz();
let id;

module.exports = {
  setHomePage: function (req, res) {
    quiz.initSuccesNumber();
    res.render('index.ejs');
  },
  createQuizData: function (req, res) {
    const options = {
      url: 'https://opentdb.com/api.php?amount=10',
      methods: 'GET',
      json: true,
    };

    request(options)
      .then((body) => {
        return quiz.arrangeData(body);
      })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getQuizData: function (req, res) {
    const number = Number(req.params.id);
    id = number;
    const question = new QuestionGetter(quiz.returnData(), id);
    const jsonData = JSON.stringify(question.returnData());
    res.render('quiz.ejs', { data: jsonData, questionNumber: id });
  },

  countSuccesResult: (req, res) => {
    const data = quiz.returnData();
    if (req.body.answer === data[id].correct_answer) {
      quiz.increaseSuccesNumber();
    }
    if (id === 9) {
      res.redirect('/finish');
    } else {
      id++;
      res.redirect(`/api/quiz/${id}`);
    }
  },

  getResultsData: (req, res) => {
    const succesNumber = quiz.returnSuccesNumber();
    res.render('results.ejs', { results: succesNumber });
  },
};
