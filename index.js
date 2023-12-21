const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const sensorDataRoutes = require('./routes/sensordataRoutes');
const storedDataRoutes = require('./routes/storeddataRoutes');

// Updated CORS configuration
const allowedOrigins = ['https://livepowerfrontend.onrender.com']; // Add additional origins if needed

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add allowed methods as needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Add allowed headers as needed
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/api', sensorDataRoutes);
app.use('/stored', storedDataRoutes);

const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://iotproject:mukesh6699@cluster0.vvapkhx.mongodb.net/iotcourse?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB...');
    app.listen(port, () => {
      console.log('App is running on port ${port}');
    });
  })
  .catch((err) => {
    console.error('Connection to MongoDB failed:', err);
  });