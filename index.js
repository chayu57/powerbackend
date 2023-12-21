const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');

const app = express();

const sensorDataRoutes = require('./routes/sensordataRoutes');

const storedDataRoutes = require('./routes/storeddataRoutes');
app.use(cors());
app.use(bodyParser.json());
app.use('/api', sensorDataRoutes);
app.use("/stored",storedDataRoutes);
const port=process.env.PORT ||5000; 

mongoose.connect('mongodb+srv://iotproject:mukesh6699@cluster0.vvapkhx.mongodb.net/iotcourse?retryWrites=true&w=majority'
).then((result)=>{
    console.log('App is running...');
    app.listen(port);
}).catch((err)=>{
    console.log(err);
});