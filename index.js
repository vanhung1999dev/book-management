const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const user_controller = require('./controller/user');
const passport = require('./middleware/passport');

app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/login', passport.authenticate('local', {
    successRedirect: '/logindone',
    failureRedirect: '/loginfaile',
}));
app.get('/logindone', async (req, res) => { res.send('login success') });
app.get('/loginfaile', async (req, res) => { res.send('faile login') });
app.post('/user', user_controller.Insert);
app.get('/user/:id', user_controller.Get);
app.get('/user', user_controller.GetAll);
app.put('/user/:id', user_controller.Update);
app.delete('/user/:id', user_controller.Delete);

app.listen(3000);