const book_controller = require('../controller/book');
const Express = require('express');
const router = Express.Router();

//%20 with space ,%21 for !,%2B for +,%23 for # in query paramter

router.post('/book', book_controller.Insert);
router.get('/book/:id', book_controller.Get);
// router.get('/book', book_controller.GetAll);
// router.get('/book',book_controller.GetByName);
// router.get('/book', book_controller.GetByAuthor);
router.get('/book',book_controller.GetByISBN);
router.put('/book/:id', book_controller.Update);
router.delete('/book/:id', book_controller.Delete);

module.exports = router;