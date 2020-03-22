const author_controller = require('../controller/author');
const Express = require('express');
const router = Express.Router();

router.post('/authors',author_controller.Insert);
router.get('/authors/:id',author_controller.Get);
router.get('/authors',author_controller.GetAll);
router.put('/authors/:id',author_controller.Update);
router.delete('/authors/:id',author_controller.Delete);

module.exports = router;