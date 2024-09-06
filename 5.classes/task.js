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
