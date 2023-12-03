const express = require('express');
var cors=require('cors');
const connectDatabase=require('./config/database');

const app = express();
const port = 5000;


app.use(cors());

app.use(express.json());

//Connecting to database
connectDatabase();

app.use('/api',require('./routes/route'));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});