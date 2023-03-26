var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function getProfile(req, res){
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('users');
    let offset, limit;
    
    if (req.query.limit) limit = req.query.limit;
    else limit = 14;

    if (req.query.page) offset = (req.query.page - 1)*limit;
    else offset = 0;
    
    try{
        let userdata = await col.findOne({email: req.user});
        if (!userdata){
            res.status(500).send('Server Error!');
            return;
        }
        const resdata = {
            email: userdata.email,
            fname: userdata.fname,
            lname: userdata.lname,
            profpic: userdata.profpic,
            mobile: userdata.mobile,
            about: userdata.about
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

module.exports.getProfile = getProfile;