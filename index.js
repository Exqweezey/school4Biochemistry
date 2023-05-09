import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.static('frontend'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'frontend'));

app.get('/', (req, res) => {
	res.render('index', {title: 'Биохимия', span: 'Биохимия для чайников'});
})

app.get('/cleaningMedia', (req, res) => {
	res.render('cleaningMedia', {title: 'Чистящие средства', span: 'Чистящие средства'});
})

app.get('/personalHygiene', (req, res) => {
	res.render('personalHygiene', {title: 'Личная гигиена', span: 'Личная гигиена'});
})

app.get('/safetyBiochemistry', (req, res) => {
	res.render('safetyBiochemistry', {title: 'Безопасное использование', span: 'Безопасное использование'});
})

app.get('/cleaningMedia/kitchen', (req, res) => {
	res.render('kitchen', {title: 'Кухня', span: 'Кухня'});
})

app.get('/cleaningMedia/toilet', (req, res) => {
	res.render('toilet', {title: 'Санузел', span: 'Санузел'});
})

app.get('/cleaningMedia/room', (req, res) => {
	res.render('room', {title: 'Комната', span: 'Комната'});
})

app.get('/personalHygiene/hair', (req, res) => {
	res.render('hair', {title: 'Волосы', span: 'Волосы'})
})

app.get('/personalHygiene/body', (req, res) => {
	res.render('body', {title: 'Тело', span: 'Тело'})
})

app.get('/personalHygiene/face', (req, res) => {
	res.render('face', {title: 'Лицо', span: 'Лицо'})
})

app.post('/searchTitle', (req, res) => {
	let titleName = req.body.titleChemistry;
	switch(titleName) {
		case 'Чистящие средства':
			res.redirect('/cleaningMedia');
			break;
		case 'Личная гигиена':
			res.redirect('/personalHygiene');
			break;
		case 'Безопасное использование':
			res.redirect('/safetyBiochemistry');
	}
})

app.post('/titleCleaningMedia', (req, res) => {
	let titleNameCleaningMedia = req.body.cleaningMedia;
	switch(titleNameCleaningMedia) {
		case 'Кухня':
			res.redirect('/cleaningMedia/kitchen');
			break;
		case 'Санузел':
			res.redirect('/cleaningMedia/toilet');
			break;
		case 'Комната':
			res.redirect('/cleaningMedia/room')
			break;
		case 'Главная страница':
			res.redirect('/')
			break;
	}
})

app.post('/titlePersonalHygiene', (req, res) => {
	let titlePersonalHygiene = req.body.personalHygiene;
	switch(titlePersonalHygiene) {
		case 'Волосы':
			res.redirect('/personalHygiene/hair');
			break;
		case 'Тело':
			res.redirect('/personalHygiene/body');
			break;
		case 'Лицо':
			res.redirect('/personalHygiene/face')
			break;
		case 'Главная страница':
			res.redirect('/')
			break;
	}
})

app.use((req, res) => {
	res.status(404);
	res.render('404', {title: 'Error 404!', span: 'Error 404!'})
})

app.listen(PORT, () => {
	console.log(`Server has been started on port: ${PORT}`);
})