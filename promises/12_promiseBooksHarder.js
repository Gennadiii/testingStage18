// Find book by partial name and say thank you to author for this particular book

const log = require('../helpers/log.helper').log;

const books = [
  {
    name: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford'
  },
  {
    name: 'Clean Code',
    author: 'Robert C. Martin'
  },
  {
    name: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani'
  }
];

function emulateRequest({resolveEntity, timeDelay = 1000}) {
  return new Promise(resolve => {
    setTimeout(_ => resolve(resolveEntity), timeDelay);
  });
}

function getBooks() {
  log(`Getting books`);
  return emulateRequest({resolveEntity: books});
}

function findBookByPartialName(books, name) {
  log(`Looking for book: ${name}`);
  return books.find(book => book.name.includes(name));
}

function getAuthor(book) {
  log(`Getting author`);
  return book.author;
}

function sayThanksForBook(author, book) {
  console.log(`\nThanks for the book "${book}", ${author}`);
}


let theBookName = null;

getBooks()
  .then(books => findBookByPartialName(books, 'Good Parts'))
  .then(book => (theBookName = book.name, book))
  .then(getAuthor)
  .then(author => sayThanksForBook(author, theBookName))
  .catch(console.log);