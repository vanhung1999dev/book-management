const user_controller = require('../controller/user');
const Express = require('express');
const router = Express.Router();
const Middleware = require('../middleware/login');

router.post('/login',Middleware.Login);
router.post('/users', user_controller.Insert);
router.get('/users/:id', user_controller.Get);
router.get('/users', user_controller.GetAll);
router.put('/users/:id', user_controller.Update);
router.delete('/users/:id', user_controller.Delete);

module.exports = router;