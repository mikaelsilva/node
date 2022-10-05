const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

const app = express();
//const product = require('./api/product');
const PORT = process.env.PORT || 5050;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mvs2:Mongodb123@cluster0.75iwdbw.mongodb.net/test";

//app.use("/api/product", product);
//app.listen(PORT, () => console.log('Server is running in port ${PORT}'));

MongoClient.connect(uri,{useNewUrlParser: true}, (err, client) => {
    if (err) return console.log(err)
    db = client.db('test');

    app.listen(PORT, () => {
        console.log('server running on port PORT');
    });
});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/', (req,res) => {
    res.render('index.ejs');
})

app.get('/',(req,res) => {
    var cursor = db.collection('multimidia').find()
});

app.get('/show', (req,res) => {
    db.collection('multimidia').find().toArray((err,results) => {
        if (err) return console.log(err)
        //console.log(results)
        res.render('show.ejs', {data: results})
   });
});

//app.post('/show', (req,res) => {
//    db.collection('multimidia').insertOne({"cod":req.body.cod,"lat":req.body.lat,"long":req.body.long}, (err, result) => {
//        if (err) return console.log(err)

//        console.log('Salvamento no banco concluído')
//        res.redirect('/show')
//    });
//});
