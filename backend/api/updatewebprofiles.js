var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function updateWebProfiles(req, res){
    if (!req.body.data){
        res.status(400).send('Bad Request!');
        return;
    }
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('webprofiles');
    //console.log('AA')
    try{
        let userdata = await col.updateOne({email: req.user}, {$set:req.body.data});
        if (!userdata){
            res.status(500).send('Server Error!');
            return;
        }
        res.status(200).send('Data Updated Successfully');
        return;
    }
    catch(e){
        console.log(e);
        res.status(500).send('Server Error!');
        return;
    }
}

module.exports.updateWebProfiles = updateWebProfiles;