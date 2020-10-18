import express from 'express';
import morgan from 'morgan';
import studentRouter from './student.router';

const app = express();

app.use(express.json());

app.use(morgan('combined'));

// set up student router
app.use('/api', studentRouter);

app.use('*', (req, res) => res.status(404).send({ message: 'the requested resource cannot be found' }));

export default app;
