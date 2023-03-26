var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function getPicture(req, res){
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('users');
    //console.log('AA')
    try{
        let userdata = await col.findOne({email: req.user});
        if (!userdata){
            res.status(500).send('Server Error!');
            return;
        }
        if (userdata.profpic == ""){
            res.status(404).send('Use Default Avatar');
            return;
        }
        else{
            res.status(200).sendfile('./avatars/' + userdata.profpic);
            return;
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send('Server Error!');
        return;
    }
}

module.exports.getPicture = getPicture;