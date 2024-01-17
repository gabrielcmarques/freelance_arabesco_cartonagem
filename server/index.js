import cors from 'cors';
import express from 'express';
import multer from 'multer';
import mysql from 'mysql';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'


const app = express();
app.use(express.json());
app.use(cors());
app.use('img', express.static('uploads/'));

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/'); // Specify the upload directory
	},
	filename: function (req, file, cb) {
		const uniqueFilename = `${uuidv4()}-${file.originalname}`;
		cb(null, uniqueFilename);
	}
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	port: process.env.DB_PORT,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
});

//if there is a auth problem:
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '[password]'

db.connect((err) => {
	if (err) {
		console.error('Error connecting to the database: ', err);
		process.exit(1);
	}
	console.log('Connected to the Database!@');
});

app.get('/', (req, res) => {
	res.json('Hello, this is the backend.');
});

app.get('/produtos', (req, res) => {
	const query = 'SELECT * FROM produtos';
	db.query(query, (err, data) => {
		if (err) {
			console.error('Database query ERROR!!!: ', err);
			return res.status(500).json('!!! ERRO: Database query error');
		}
		return res.json(data);
	});
});

app.get('/produtos/:id', (req, res) => {
	const produtoId = req.params.id;

	const query = 'SELECT nome, `desc`, imagem_url, preco, slug FROM produtos WHERE id = ?';
	const values = [produtoId];

	db.query(query, values, (err, data) => {
		if (err) {
			console.error('Database query ERROR!!!: ', err);
			return res.status(500).json({ error: 'Internal Server Error' });
		}

		if (data.length === 0) {
			return res.status(404).json({ error: 'Produto não encontrado' });
		}

		return res.json(data[0]); // Assuming you want to return the first matching product
	});
});

app.get('/produtos/:id/imagem', (req, res) => {
	const produtoId = req.params.id;

	const query = 'SELECT imagem_url FROM produtos WHERE id = ?';
	const values = [produtoId];

	db.query(query, values, (err, data) => {
		if (err) {
			console.error('Database query ERROR!!!: ', err);
			return res.status(500).json({ error: 'Internal Server Error' });
		}

		if (data.length === 0) {
			return res.status(404).json({ error: 'Produto não encontrado' });
		}

		return res.json({ imagem_url3: data[0].imagem_url });
	});
});

app.post('/produtos', upload.single('imagem_url2'), (req, res) => {
	const query = 'INSERT INTO produtos (`nome`,`preco`, `desc`, `imagem_url`, `slug`) VALUES (?)';

	const uuid4_slug = uuidv4();
	let imagem_url2;

	if (req.file) {
		// Image file was uploaded
		const uniqueFilename = `${uuidv4()}-${req.file.originalname}`;
		imagem_url2 = `/uploads/${uniqueFilename}`;
	} else {
		// No image file was uploaded
		imagem_url2 = req.body.imagem_url2;
	}

	const values = [req.body.nome, req.body.preco, req.body.desc, imagem_url2, uuid4_slug];

	console.log('!!@@values \n', values);

	// (err, data)
	db.query(query, [values], (err) => {
		console.log('data', values);
		if (err) return res.json(err);
		return res.json(`Produto criado sucesso: ${values}`);
	});
});

app.put('/produtos/:id', (req, res) => {
	const produtoId = req.params.id;
	const { nome, preco, desc, imagem_url } = req.body;

	if (!nome || !preco || !desc || !imagem_url) {
		return res.status(400).json({ error: 'Nome, Desc ou Imagem estão faltando na requisição.' });
	}

	const updateQuery =
		'UPDATE produtos SET nome = ?, `preco` = ?, `desc` = ?, imagem_url = ? WHERE id = ?';
	const values = [nome, preco, desc, imagem_url, produtoId];

	db.query(updateQuery, values, (err, result) => {
		if (err) {
			console.error('Database query ERROR!!!:\n', err);
			return res.status(500).json({
				error: 'Internal Server Error'
			});
		}
		if (result.affectedRows === 0) {
			return res.status(404).json({ error: 'Produto não encontrado' });
		}
		return res.json({ message: 'Produto atualizadocom sucesso!!' });
	});
});

app.delete('/produtos/:id', (req, res) => {
	const produtoId = req.params.id;

	const deleteQuery = 'DELETE FROM produtos WHERE id = ?';

	db.query(deleteQuery, [produtoId], (err, result) => {
		if (err) {
			console.error('Database query ERROR!!!', err);
			return res.status(500).json({ error: 'Internal Server Error' });
		}
		if (result.affectedRows === 0) {
			return res.status(404).json({ error: 'Produto não encontrado' });
		}

		return res.json({ message: 'Produto removido com sucesso!' });
	});
});

app.listen(process.env.PORT, () => {
	console.log('Connected to backend!');
});
