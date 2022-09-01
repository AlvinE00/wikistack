const router = require('express').Router();
const { Page } = require('../models');
const { addPage } = require('../views/');

router.get('/', (req, res, next) => {
  res.send('This is the Wiki Page');
});

// router.post('/', (req, res, next) => {
//   res.json(req.body);
// });

router.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});
module.exports = router;
