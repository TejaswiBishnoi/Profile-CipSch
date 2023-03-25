const express = require('express');
const app = express();
const port = 5000;
const multer = require('multer');
const cors = require('cors')
app.use(cors({origin:'*'}));
const authMiddleware = require('./api/authmiddleware').authMiddleware;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/register', (req, res)=>{console.log('register'); require('./api/register').register(req,res);});

app.post('/api/login', (req, res)=>{console.log('login'); require('./api/login').login(req,res);});

app.post('/api/changepass', (req, res)=>{console.log('password change'); require('./api/updatepassword').updatePass(req, res)});

app.get('/', authMiddleware,(req, res)=>{console.log(req.headers)});

app.get('/api/getprofile', authMiddleware, (req, res)=>{console.log('Get Profile'); require('./api/getprofile').getProfile(req, res)});

app.post('/api/updateprofile', authMiddleware, (req, res)=>{console.log('Update Profile'); require('./api/updateprofile').updateProfile(req, res)})

app.get('/api/getwebprofiles', authMiddleware, (req, res)=>{console.log('Get Web Profiles'); require('./api/getwebprofiles').getWebProfiles(req, res)})

app.post('/api/updatewebprofiles', authMiddleware, (req, res)=>{console.log('Update Web Profiles'); require('./api/updatewebprofiles').updateWebProfiles(req, res)})

app.get('/api/getprofinfo', authMiddleware, (req, res)=>{console.log('Get Professional Info'); require('./api/getprofinfo').getProfInfo(req, res);})

app.post('/api/updateprofinfo', authMiddleware, (req, res)=>{console.log('Update Professional Info'); require('./api/updateprofinfo').updateProfInfo(req,res)});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});