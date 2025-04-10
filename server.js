const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Api = require('./models/api.js');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});

// CREATE - POST - /api
// app.get('/api', async (req, res) => {
//     res.send("test")

// });

// CREATE - POST - /api
app.post('/api', async (req, res) => {
    const createdApi = await Api.create(req.body);
    res.json(createdApi)
  });
  
  // READ - GET - /pets
app.get('/api', async (req, res) => {
	// Add a message to test the route
	const foundApi = await Api.find();
    res.json(foundApi);
});

app.delete('/api/:apiId', async (req, res) => {
	// Add a message to test the route
	const deletedApi = await Api.findByIdAndDelete(req.params.apiId);
    res.json(deletedApi);
});

// UPDATE - PUT - /api/:apiId
app.put('/:apiId', async (req, res) => {
    // Add { new: true } as the third argument
    const updatedApi = await Api.findByIdAndUpdate(
	    req.params.apiId, 
	    req.body,
	    {new: true}
    );
});