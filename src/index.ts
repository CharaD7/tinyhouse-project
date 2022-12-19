import bodyParser from 'body-parser';
import express from 'express';

import { listings } from './listing';

const app = express();
const port = 9000;

app.use(bodyParser.json());

const one = 1;
const two = 2;

app.get('/', (req, res) => res.send(`1 + 2 = ${one + two}`));

app.get('/listings', (req, res) => res.send(listings));

app.get('/delete-listing', (req, res) => {
	const id = req.body.id;
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
