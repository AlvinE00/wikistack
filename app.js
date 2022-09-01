const express = require('express');
const morgan = require('morgan');
const { db, Page, User } = require('./models');
// const html = require('./views/layout');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

db.authenticate().then(() => {
	console.log('connected to the database');
});

app.get('/', (req, res) => {
	res.send('');
});

const PORT = 1337;

const init = async () => {
	await db.sync({ force: true });

	app.listen(PORT, () => {
		console.log(`app listening in ${PORT}`);
	});
};

init();
