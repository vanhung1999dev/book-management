const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./router/admin'));
app.use(require('./router/book'));
app.use(require('./router/catelog'));

app.listen(3000);