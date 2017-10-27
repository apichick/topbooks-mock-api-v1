var express = require('express');
var app = express();
var jsonpath = require('JSONPath');
var _ = require('lodash');

var data = require('./mocks/data.json');

var findAuthor = function(res, path) {
    var author = jsonpath({json: data, path: path, resultType: 'value', wrap: false});
    if(author) {
        res.json(author);
    } else {
        res.status(404).send();
    }
};

var findBook = function(res, path) {
    var result = jsonpath({json: data, path: path, resultType: 'all'});
    if(!_.isEmpty(result)) {
        var book = result[0].value[0];
        var author = result[0].parent;
        delete author.books;
        book.author = author;
        res.json(book);
    } else {
        res.status(404).send();
    }
};

app.get('/authors', function (req, res) {
    res.json(data);
});

app.get('/authors/:id', function (req, res) {
    findAuthor(res, '$.[?(@.id==="' + req.params.id + '")]');
});

app.get('/authors/search', function (req, res) {
    findAuthor(res, '$[?(/'+ req.query.q +'/.test(@.name))]');
});

app.get('/books', function (req, res) {
    var books = [];
    for(var i = 0; i < data.length; i++) {
        var item = data[i];
        for(var j = 0; j < item.books.length; j++) {
            var book = item.books[j];
            var author = _.clone(item);
            delete author.books;
            book.author = author;
            books.push(book);
        }
    }
    res.json(books);
});

app.get('/books/:id', function (req, res) {
    findBook(res, '$..books[?(@.id==="' + req.params.id + '")]^');
});

app.get('/books/search', function (req, res) {
    findBook(res, '$..books[?(/'+ req.query.q +'/.test(@.title))]^');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
