import express from 'express';
import morgan from 'morgan';
import userRouter from './user.router';

const app = express();

app.use(express.json());

app.use(morgan('combined'));

// set up user router
app.use('/api', userRouter);

app.use('*', (req, res) => res.status(404).send({ message: 'the requested resource cannot be found' }));

export default app;
