const user_controller = require('../controller/user');
const Express = require('express');
const router = Express.Router();

router.post('/user', user_controller.Insert);
router.get('/user/:id', user_controller.Get);
router.get('/user', user_controller.GetAll);
router.put('/user/:id', user_controller.Update);
router.delete('/user/:id', user_controller.Delete);

module.exports = router;