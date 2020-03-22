const catelog_controller = require('../controller/catelong');
const Express = require('express');
const router = Express.Router();

router.post('/catelogs',catelog_controller.Insert);
router.get('/catelogs/:id',catelog_controller.Get);
router.get('/catelogs',catelog_controller.GetAll);
router.put('/catelogs/:id',catelog_controller.Update);
router.delete('/catelogs/:id',catelog_controller.Delete);

module.exports = router;