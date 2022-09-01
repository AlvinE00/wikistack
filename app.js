const express = require('express');
const morgan = require('morgan');
const { db, Page, User } = require('./models');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/wiki', require('./routes/wiki'));
app.use('/users', require('./routes/users'));

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

const PORT = 1337;

const init = async () => {
  await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`app listening in ${PORT}`);
  });
};

init();
