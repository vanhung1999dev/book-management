const book_controller = require('../controller/book');
const Express = require('express');
const router = Express.Router();

//%20 with space ,%21 for !,%2B for +,%23 for # in query paramter

router.post('/books', book_controller.Insert);
router.get('/books/:id', book_controller.Get);
router.get('/books', book_controller.FilterBook);
router.put('/books/:id', book_controller.Update);
router.put('/books/:id/approved',book_controller.Approved);
router.delete('/books/:id', book_controller.Delete);

module.exports = router;