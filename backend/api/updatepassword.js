var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function updatePass(req, res){
    if (!req.body.email || !req.body.pword){
        res.status(400).send('Bad Request');
        return;
    }
    if (req.body.pword == ""|| req.body.newpword == "" || !req.body.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)){
        res.status(400).send('Invalid Data');
        return;
    }
    let newHash = bcrypt.hash(req.body.newpword, 10);
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
            res.status(401).send("Current Incorrect Password");
            return;
        }
    }catch(e){
        res.status(500).send('Server Error');
        return;
    }
    try{
        let updateStatus = await col.updateOne({email: req.body.email}, {$set:{passhash: await newHash}});
        if (!updateStatus.acknowledged){
            res.status(500).send('Server Error');
            return;
        }
        res.status(200).send('Password updated successfully!');
    }catch(e){
        console.log(e);
        res.status(500).send('Server Error');
        return;
    }  
}
module.exports.updatePass = updatePass;