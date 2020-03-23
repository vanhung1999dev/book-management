const user_controller = require('../controller/user');
const account_controller = require('../controller/account');
const Express = require('express');
const router = Express.Router();
const Middleware = require('../middleware/login');

router.post('/login',Middleware.Login);
// router.post('/users', user_controller.Insert);
router.get('/users/:id', user_controller.Get);
router.get('/users', user_controller.GetAll);
router.put('/users/:id', user_controller.Update);
router.delete('/users/:id', user_controller.Delete);

router.post('/accounts', account_controller.MakeAccount);
router.get('/accounts/:id',account_controller.GetAccount);
router.get('/accounts', account_controller.GetAccounts);
router.put('/accounts/:id', account_controller.UpdateAccount);
router.put('/accounts/:id',account_controller.BlockAccount);

router.post('/permision/:id', user_controller.GrantPermision);

module.exports = router;