// Find book by partial name and say thank you to author for this particular book

const log = require('../helpers/log.helper').log;


function emulateRequest({resolveEntity, timeDelay = 1000}) {
  return new Promise(resolve => {
    setTimeout(_ => resolve(resolveEntity), timeDelay);
  });
}

function getBooks() {
  log(`Getting books`);
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
  return emulateRequest({resolveEntity: books});
}

function findBookByPartialName(books, name) {
  log(`Looking for book: ${name}`);
  return Promise.resolve()
    .then(_ => books.find(book => book.name.includes(name)));
}

function getAuthor(book) {
  log(`Getting author`);
  return Promise.resolve()
    .then(_ => book.author);
}

function sayThanksForBook(author, book) {
  Promise.resolve()
    .then(_ => console.log(`\nThanks for the book "${book}", ${author}`));
}


void async function main() {
  try {
    let books = await getBooks(),
      book = await findBookByPartialName(books, 'Good Parts'),
      author = await getAuthor(book);
    await sayThanksForBook(author, book.name);
  } catch (err) {
    console.log(err);
  }
}();
