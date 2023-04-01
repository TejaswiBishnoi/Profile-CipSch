var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function getFollowers(req, res){
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('followers');
    let offset, limit;
    
    if (req.query.limit) limit = req.query.limit;
    else limit = 12;

    if (req.query.page) offset = (req.query.page - 1)*limit;
    else offset = 0;
    
    try{
        let initdata = await col.find({following: req.user}, {projection:{follower: 1, _id: 0}}).skip(offset).limit(limit).toArray();
        if (!initdata){
            res.status(500).send('Server Error!');
            return;
        }
        //console.log(initdata)
        const resdata = []
        for (var i = 0; i < initdata.length; i++){
            let userdata = await db.collection('users').findOne({email: initdata[i].follower}, {projection: {fname: 1, lname: 1, profpic: 1, followers: 1, _id: 0}});
            if(!userdata) console.log(i);
            let userdata2 = await db.collection('profinfo').findOne({email: initdata[i].follower}, {projection: {profession: 1}});
            if(userdata2!=null)userdata.profession = userdata2.profession;
            else userdata.profession = (i%5).toString();
            //console.log(userdata);
            resdata.push(userdata);
        }
        res.status(200).send(resdata);
        return;
    }
    catch(e){
        console.log(e);
        res.status(500).send('Server Error!');
        return;
    }
}

module.exports.getFollowers = getFollowers;