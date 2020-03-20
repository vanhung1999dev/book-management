const book_controller = require('../controller/book');
const Express = require('express');
const router = Express.Router();


router.post('/book', book_controller.Insert);
router.get('/book/:id', book_controller.Get);
router.get('/book', book_controller.GetAll);
router.put('/book/:id', book_controller.Update);
router.delete('/book/:id', book_controller.Delete);

module.exports = router;