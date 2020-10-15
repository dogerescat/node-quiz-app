class Quiz {
  constructor(data) {
    this.data = data;
    this.arrangedData;
  }
  arrangeData() {
    this.arrangedData = this.data.body.results;
  }
  returnData() {
    return this.arrangedData;
  }
}

module.exports = Quiz;
