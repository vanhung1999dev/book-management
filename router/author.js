const author_controller = require('../controller/author');
const Express = require('express');
const router = Express.Router();

router.post('/author',author_controller.Insert);
router.get('/author/:id',author_controller.Get);
router.get('/author',author_controller.GetAll);
router.put('/author/:id',author_controller.Update);
router.delete('/author/:id',author_controller.Delete);

module.exports = router;