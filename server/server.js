const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const router = require('./derbylistingRouter');
// handle parsing request body
app.use(bodyParser.json());

// request for static files
app.use('/build', express.static(path.join(__dirname, '../build')));

// route handler
// app.use('/', router);

// responding with the main app
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// catch-all route handler for any requests to an unknown route, could replace with a 404 html page
app.use((req, res) => res.sendStatus(404));

// error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
