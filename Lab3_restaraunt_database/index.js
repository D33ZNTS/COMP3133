const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restaurant_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// Define Restaurant Schema
const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  city: String,
  restaurant_id: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// REST API to return all restaurant details
app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// REST API to return all restaurant details by cuisine
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// REST API to return restaurants details with sorting
app.get('/restaurants', async (req, res) => {
  try {
    const sortBy = req.query.sortBy || 'ASC';
    const restaurants = await Restaurant.find().sort({
      restaurant_id: sortBy === 'ASC' ? 1 : -1,
    });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// REST API to return restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
app.get('/restaurants/Delicatessen', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: 'Delicatessen',
      city: { $ne: 'Brooklyn' },
    }).select('-_id cuisines name city');
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
