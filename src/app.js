import express from 'express';
import bodyParser from 'body-parser';

// router
import LoginRouter from './router/external/login';
import UsersRouter from './router/external/users';

// middleware
import JwtCheck from './middleware/jwtCheck';

// node
import www from './bin/www';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/v1/external', LoginRouter);
app.use('/v1/external/users', JwtCheck.verifyJwt, UsersRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.server = www(app);
module.exports = app;
