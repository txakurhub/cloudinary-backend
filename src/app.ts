import dotenv from 'dotenv';
import express from 'express';
import router from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('1, 2, 3');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});