class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this._state = Math.min(this._state * 1.5, 100);
  }

  set state(num) {
    if (num < 0) {
      this._state = 0;
    } else if (num > 100) {
      this._state = 100;
    } else {
      this._state = num;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}
class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);

    this.type = 'novel';
  }
}
class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);

    this.type = 'fantastic';
  }
}
class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);

    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    const result = this.books.find((book) => {
      if (book[type] === value) {
        return book;
      }
    });
    return result || null;
  }
  giveBookByName(bookName) {
    const result = this.books.findIndex((book) => book.name === bookName);

    if (result !== -1) {
      return this.books.pop(result);
    }
    return null;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    // debugger;
    if (mark > 1 && mark < 6) {
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
  }
  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    }

    let sum = this.marks[subject].reduce((acc, mark) => {
      return (acc += mark);
    }, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
    let result = subjects.reduce((acc, subject) => {
      return (acc += this.getAverageBySubject(subject));
    }, 0);
    if(!subjects.length){
      return 0;
    }
    return result / subjects.length;
  }
}
