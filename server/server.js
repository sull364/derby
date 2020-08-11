const express = require('express');

const app = express();
const port = 3000;
const path = require('path');

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
