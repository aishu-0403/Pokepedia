const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

mongoose.connect('mongodb+srv://aiswarya2111025:MaTaAdNa2022%23@cluster0.dhmtg.mongodb.net/pokemon?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/pokemon', pokemonRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
