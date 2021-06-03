const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const PATH = require('path');
const links = require('./links');

app.use(express.static(PATH.join(__dirname,'public')));

app.get('/', (req, res) => {
  res.sendFile(PATH.join(__dirname,'public','template','index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(PATH.join(__dirname,'public','template','home.html'));
})

app.get('/api/links',(req,res) =>{
    res.json(links);
})



app.listen(port, () => {
    // console.log(links);
  console.log(`Example app listening at http://localhost:${port}`)
})