var MongoClient = require('mongodb').MongoClient;
const bcrypt = require("bcrypt");
var url = "mongodb://localhost:27017/";

async function login(req, res){
    if (!req.body.email || !req.body.pword){
        res.status(400).send('Bad Request');
        return;
    }
    if (req.body.pword == "" || !req.body.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)){
        res.status(400).send('Invalid Data');
        return;
    }
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('users');
    let userdata;
    try{
        userdata = await col.findOne({email: req.body.email});
        if (!userdata){
            res.status(401).send('User does not exist');
            return;
        }
        let passok = await bcrypt.compare(req.body.pword, userdata.passhash);
        if (!passok){
            res.status(401).send("Incorrect Password");
            return;
        }
    }catch(e){
        res.status(500).send('Server Error');
        return;
    }
    let tokcol = db.collection('tokens');
    try{
        let prevtoken = await tokcol.findOne({email: req.body.email});
        if (prevtoken){
            let x = await tokcol.deleteOne({_id: prevtoken._id});
            if (!x.acknowledged){
                res.status(500).send('Server Error');
                return;
            }
        }
        let newtoken = await tokcol.insertOne({email: req.body.email});
        if (!newtoken.acknowledged){
            res.status(500).send('Server Error');
            return;
        }
        res.status(200).send({token: newtoken.insertedId.toString()});
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
        return;
    }  
}
module.exports.login = login;