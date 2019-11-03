const createError = require('http-errors');
const express = require('express');
const connectMongo = require('./db');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

connectMongo();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const indexRouter = require('./routes/index');
const medicationsRouter = require('./routes/medications');
const usersRouter = require('./routes/users');
const recordsRouter = require('./routes/records');
const historyRouter = require('./routes/history');

app.use('/', indexRouter);
app.use('/medications', medicationsRouter);
app.use('/users', usersRouter);
app.use('/records', recordsRouter);
app.use('/history', historyRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.disable('etag');

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
