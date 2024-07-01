import cors from 'cors';
import express from 'express';
import * as historical from './modules/historical.js';
import * as quate from './modules/quate.js';

const app = express();
app.use(cors());

const port = 3000;
const server = app.listen(port, () => {
	console.log('listening to PORT:' + server.address().port);
});

app.get('/quate/get/:symbol', (req, res, next) => {
	const symbol = req.params.symbol;
	const quateGet = quate.get(symbol);
	quateGet.then((result) => {
		res.json(result);
	}).catch(next);
});

app.get('/historical/get/:query', async (req, res, next) => {
	const query = req.params.query;
	const queryOptions = req.query;
	const historicalGet = historical.get(query, queryOptions);
	historicalGet.then((result) => {
		res.json(result);
	}).catch(next);
});
