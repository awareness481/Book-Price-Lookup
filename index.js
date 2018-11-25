const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

require('./routes/routes')(app);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))