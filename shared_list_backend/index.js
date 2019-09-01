const express = require('express');
const cors = require('cors');


const app = express();

// The list entries, represented by an array of arrays
let data = [];

// A function that builds the entries of the list

const entryBuilder = (name, description, store, price) => {
	let entry = {};
	entry.name = name;
	entry.description = description;
	entry.store = store;
	entry.price = price;
	return entry;
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send(data);
})

app.post('/', (req, res) => {
	data.push(req.body);
	res.send(data);
})

app.delete('/', (req, res) => {
	const itemToRemove = req.body.name;
	data = data.filter(item => item[0] !== itemToRemove);
	res.send(data);
})

app.listen(3000, () => {
	console.log('working');
})