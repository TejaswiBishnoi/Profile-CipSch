var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const ObjectID = require('mongodb').ObjectId;

async function authMiddleware(req, res, next){
    if (!req.headers.token){
        res.status(401).send('No token provided');
        return;
    }
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('tokens');
    try{
        let user = await col.findOne({_id: new ObjectID(req.headers.token)});
        if (!user) {
            res.status(401).send('Invalid Token');
            return;
        }
        req.user = user.email
        next();
        return;
    }
    catch(e){
        console.log(e);
        res.status(401).send("Authentication Failure");
        return;
    }
}
module.exports.authMiddleware = authMiddleware;