var MongoClient = require('mongodb').MongoClient;
const bcrypt = require("bcrypt");
var url = "mongodb://localhost:27017/";

async function register(req, res){
    if (!req.body.fname || !req.body.lname || !req.body.email || !req.body.lname|| !req.body.pword){
        res.status(400).send('Bad Request');
        return;
    }
    var email = ""
    if (!req.body.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) || req.body.fname == "" || req.body.lname == "" || req.body.pword == ""){
        res.status(400).send('Invalid Data');
        return;
    }
    var passhash;
    try{
        passhash = bcrypt.hash(req.body.pword, 10);
    }
    catch(e){
        console.log(e);
        res.status(500).send('Server Error');
        return;
    }
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('users');
    let prev;
    try{
        prev = await col.findOne({email: req.body.email});
        if (prev){
            res.status(400).send("Email Already used");
            return;
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send('Server Error');
        return;
    }
    const userobj = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        passhash: await passhash,
        mobile: req.body.mobile,
        about: "",
        profpic: "",
        followers: 0
    };
    try{
        let ins = await col.insertOne(userobj);
        if (ins.acknowledged){
            res.status(200).send('User Registered Successfully');
            return;
        }
        else{
            res.status(500).send('Server Error');
            return;
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send('Server Error');
        return;
    }
}
module.exports.register = register;