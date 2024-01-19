import cors from 'cors';
import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public');
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({
	storage: storage
});

app.post('/upload', upload.single('file'), (req, res) => {
	console.log(req.file);
});

app.listen(3001, () => {
	console.log('Server is running');
});
