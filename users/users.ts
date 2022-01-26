import express from 'express';

const userRouter = express.Router();

userRouter.post('/login', (req, res) => {
	res.send('login');
});

userRouter.post('/regiter', (req, res) => {
	res.send('register');
});

export { userRouter };