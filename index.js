const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const MiddleWare = require('./middleware/verityToken');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"]
}));
app.use(MiddleWare.verifyToken_authorization);

app.use(require('./router/admin'));
app.use(require('./router/book'));
app.use(require('./router/catelog'));
app.use(require('./router/author'));

app.listen(3001,()=> console.log('server working....300000'));