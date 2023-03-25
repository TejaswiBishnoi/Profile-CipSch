const express = require('express');
const app = express();
const port = 5000;
const multer = require('multer');
const cors = require('cors')
app.use(cors({origin:'*'}));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/register', (req, res)=>{console.log('register'); require('./api/register').register(req,res);});

app.post('/api/login', (req, res)=>{console.log('login'); require('./api/login').login(req,res);});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});