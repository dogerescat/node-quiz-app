class InitialPageCreator {
  constructor() {
    this.id = 0;
    this.h1 = document.querySelector('h1');
    this.question = document.getElementById('question');
    this.button = document.getElementById('start');
    this.onClickStartButton()
  }

  onClickStartButton() {
    this.button.addEventListener('click', () => {
      fetch('api/quiz')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } 
      })
      .then(() => {
        location.href = `/api/quiz/${this.id}`;
      })
      .catch((error) => {
        console.log(error);
      })
      this.waitUserPage();
    })
  }

  waitUserPage() {
    this.delete();
    this.createTitle();
    this.createMessage();
  }

  delete() {
    this.h1.removeChild(this.h1.firstChild);
    this.question.removeChild(this.question.firstElementChild);
    this.button.remove();
  }

  createTitle() {
    const title = document.createElement('p');
    title.appendChild(document.createTextNode('取得中')) ;
    this.h1.appendChild(title);
  }

  createMessage() {
    const message = document.createElement('p');
    message.setAttribute('class', 'question');
    message.appendChild(document.createTextNode('少々お待ちください'));
    this.question.appendChild(message);
  }
}

const initialPage = new InitialPageCreator();
