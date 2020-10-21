const express = require('express');
const router = express.Router();
const quizController = require('./controller/controller.quiz');

router.get('/', quizController.setHomePage);
router.get('/api/quiz', quizController.createQuizData); 
router.get('/api/quiz/:id',quizController.getQuizData);
router.post('/api/quiz/results', quizController.countSuccesResult);
router.get('/finish', quizController.getResultsData);

module.exports = router;