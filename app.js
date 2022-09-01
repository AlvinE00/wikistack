const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
// app.use('/', require('./roots'));
app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`app listening in ${PORT}`);
});
