import cors from 'cors';
import express from 'express';
import mysql from 'mysql';

const app = express();
app.use(express.json());
app.use(cors());

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

app.post('/produtos', (req, res) => {
	const query = 'INSERT INTO produtos (`nome`,`preco`, `desc`, `imagem_url`) VALUES (?)';
	const values = [req.body.nome, req.body.preco, req.body.desc, req.body.imagem_url];
	// const values = ["title from backend", "desc from backend", "imagem from backend"]

	// console.log('!!@@values \n', values);

	db.query(query, [values], (err, data) => {
		if (err) return res.json(err);
		return res.json('Produto criado sucesso!');
	});
});

app.put('/produtos/:id', (req, res) => {
	const produtoId = req.params.id;
	const { nome, desc, imagem_url } = req.body;

	if (!nome || !desc || !imagem_url) {
		return res.status(400).json({ error: 'Nome, Desc ou Imagem estão faltando na requisição.' });
	}

	const updateQuery = 'UPDATE produtos SET nome = ?, `desc` = ?, imagem_url = ? WHERE id = ?';
	const values = [nome, desc, imagem_url, produtoId];

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
