require('dotenv').config();

const express = require('express')
const path= require('path');

const app = express()
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
