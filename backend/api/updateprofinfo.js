var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function updateProfInfo(req, res){
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('profinfo');
    
    //console.log('AA')
    try{
        const updt = {};
        if (req.body.highedu && (req.body.highedu >= 0 && req.body.highedu <= 4)){
            updt.highedu = req.body.highedu;
        }
        else if (req.body.highedu){
            res.status(400).send('Bad Request!');
            return;
        }
        if (req.body.profession && (req.body.profession >= 0 || req.body.profession <= 4)){
            updt.profession = req.body.profession;
        }
        else if (req.body.profession){
            res.status(400).send('Bad Request!');
            return;
        }
        if (req.body.interests && (req.body.interests != "" && req.body.interests.match(/^[0|1]{8}$/gm))){
            updt.interests = req.body.interests;
        }
        else if (req.body.interests){
            res.status(400).send('Bad Request!');
            return;
        }
        let userdata = await col.updateOne({email: req.user}, {$set:updt});
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

module.exports.updateProfInfo = updateProfInfo;