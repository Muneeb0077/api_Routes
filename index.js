const express = require('express');
var cors=require('cors');

const app = express();
const port = 5000;


app.use(cors());

app.use(express.json());


app.use('/api',require('./routes/route'));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});