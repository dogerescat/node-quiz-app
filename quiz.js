class Quiz {
  constructor() {
    this.succesNumber = 0;
    this.body;
    this.arrangedData;
  }
  initSuccesNumber() {
    this.succesNumber = 0;
  }
  arrangeData(body) {
    return this.arrangedData = body.results;
  }
  returnData() {
    return this.arrangedData;
  }
  increaseSuccesNumber() {
    this.succesNumber++
  }
  returnSuccesNumber() {
    return this.succesNumber;
  }
}

module.exports = Quiz;
