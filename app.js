const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
// const Sauce = require('./models/Sauce');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
mongoose.connect('mongodb+srv://Sauces:r4KYHkZFLqyeaOvg@cluster0.aebfvkd.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const app = express();

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });
 app.use(bodyparser.json())
 app.use(express.json());
 app.use('/api/stuff', stuffRoutes);
 
app.use('/api/auth', userRoutes);



module.exports = app;