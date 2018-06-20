require('./hot-reload');
const express = require('express');
const app = express();

// require home on every request
app.get('/', (req, res) => require('./controllers/home')(req, res));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
