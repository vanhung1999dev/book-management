const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const user_controller = require('./controller/user');
const book_controller = require('./controller/book');
const user_book_controller = require('./controller/user_book');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', user_controller.Insert);
app.get('/user/:id', user_controller.Get);
app.get('/user', user_controller.GetAll);
app.put('/user/:id', user_controller.Update);
app.delete('/user/:id', user_controller.Delete);

app.post('/book', book_controller.Insert);
app.get('/book/:id', book_controller.Get);
app.get('/book', book_controller.GetAll);
app.put('/book/:id', book_controller.Update);
app.delete('/book/:id', book_controller.Delete);

app.get('/user_book', user_book_controller.GetAll);
app.listen(3000);