class QuestionGetter {
  constructor(data, id) {
    this.data = data[id];
    this.category = this.data.category;
    this.difficulty = this.data.difficulty;
    this.question = this.data.question;
    this.correct_answer = this.data.correct_answer;
    this.incorrect_answers = this.data.incorrect_answers;
  }
  returnData() {
    return {
      category: this.category,
      difficulty: this.difficulty,
      question: this.question,
      correct_answer: this.correct_answer,
      incorrect_answers: this.incorrect_answers,
    };
  }
}
module.exports = QuestionGetter;
