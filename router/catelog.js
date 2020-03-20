const catelog_controller = require('../controller/catelong');
const Express = require('express');
const router = Express.Router();

router.post('/catelog',catelog_controller.Insert);
router.get('/catelog/:id',catelog_controller.Get);
router.get('/catelog',catelog_controller.GetAll);
router.put('/catelog/:id',catelog_controller.Update);
router.delete('/catelog/:id',catelog_controller.Delete);

module.exports = router;