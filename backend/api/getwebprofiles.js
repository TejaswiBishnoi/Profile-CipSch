var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function getWebProfiles(req, res){
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('webprofiles');
    console.log('AA')
    try{
        let userdata = await col.findOne({email: req.user});
        if (!userdata){
            res.status(500).send('Server Error!');
            return;
        }
        const resdata = {
            linkedin: userdata.linkedin,
            github: userdata.github,
            facebook: userdata.facebook,
            instagram: userdata.instagram,
            twitter: userdata.twitter,
            website: userdata.website
        };
        res.status(200).send(resdata);
        return;
    }
    catch(e){
        console.log(e);
        res.status(500).send('Server Error!');
        return;
    }
}

module.exports.getWebProfiles = getWebProfiles;