var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

(async ()=>{
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    let db = client.db('Profile');
    let col = db.collection('followers');

    for (var i = 13; i <= 14; i++){
        await col.insertOne({follower: `example${i}@example.cip`, following: 'example@example.cip'})
    }
})()