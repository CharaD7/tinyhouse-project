import bodyParser from 'body-parser';
import express from 'express';

import { listings } from './listing';

const app = express();
const port = 9000;

app.use(bodyParser.json());

app.get('/listings', (req, res) => res.send(listings));

app.post('/delete-listing', (req, res) => {
	const id: string = req.body.id;

	for (let i = 0; i < listings.length; i++) { // check for the particular id specified
		if (listings[i].id === id) { // if the id is found
			return res.send(listings.splice(i, 1)); // splice deletes the id and returns the message, but we use 1 since we only want to delete one item
		}
	}

	return res.send("Failed to delete listing"); // if id does not exist
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
