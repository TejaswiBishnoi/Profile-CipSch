var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function updatePicture(req, res){
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('users');

    try{
        let updt = await col.updateOne({email: req.user}, {$set:{profpic: req.file.filename}});
        if (!updt.acknowledged){
            req.status.send('Server Error');
            return;
        }
        else{
            res.status(200).send('Picture Updated Successfully');
        }
    }catch(e){
        console.log(e);
        res.status(500).send("Server Error");
    }
}
module.exports.updatePicture = updatePicture;