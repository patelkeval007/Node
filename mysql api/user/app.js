const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
dotenv.config();

// set port
app.listen(4444, function () {
    console.log('Node app is running on port 4444');
});

routes(app);
