const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const user_controller = require('./controller/user');
const Verify = require('../book-management/middleware/verityToken');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => res.status(200).json({ "message": "login done" }));
app.post('/user', user_controller.Insert);
app.get('/user/:id', user_controller.Get);
app.get('/user', user_controller.GetAll);
app.put('/user/:id', user_controller.Update);
app.delete('/user/:id', user_controller.Delete);
app.listen(3000);