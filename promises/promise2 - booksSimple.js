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

function findBook(books, name) {
    log(`Looking for book: ${name}`);
    return books.find(book => book.name === name);
}

function getAuthor(book) {
    log(`Getting author`);
    return book.author;
}

function sayThanks(author) {
    console.log(`\nThanks, ${author}`);
}


getBooks()
    .then(books => findBook(books, 'JavaScript: The Good Parts'))
    .then(getAuthor)
    .then(sayThanks)
    .catch(console.log);