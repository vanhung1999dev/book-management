const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"]
}));

app.use(require('./router/admin'));
app.use(require('./router/book'));
app.use(require('./router/catelog'));
app.use(require('./router/author'));

app.listen(3009,()=> console.log('server working....3009'));