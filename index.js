const Express = require('express');
const app = Express();

app.use(require('./router/user'));

app.listen(3000);