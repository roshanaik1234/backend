require('dotenv').config(); 
console.log(process.env); 

const express = require('express');
const app = express();
const port = process.env.PORT || 6000; 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


app.get('/roshan', (req, res) => {
    res.send('hello roshan');
});
