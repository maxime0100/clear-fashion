const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://maxime0100:Guitare60@cluster0.nbakx.mongodb.net/Cluster0?retryWrites=true&w=majority";
const MONGODB_DB_NAME = 'clear-fashion';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const ObjectId = require('mongodb').ObjectId

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.get('/products', (request, response) => {
    const db = client.db(MONGODB_DB_NAME);
    const collection = db.collection('products');
    const result = await collection.find({ 'brand': 'montlimart' }).toArray();
    console.log(result);
    response.send(result);
    client.close();});

app.get('/products/brand/:brand', (request, response) => {
    client.connect(async err => {
        // perform actions on the collection object

        const db = client.db(MONGODB_DB_NAME);
        const collection = db.collection('products');
        const result = await collection.find({ 'brand': request.params.brand }).toArray();
        console.log(result);
        response.send(result);
        client.close();
    });
});

app.get('/products/:id', (request, response) => {
    client.connect(async err => {
        // perform actions on the collection object

        const db = client.db(MONGODB_DB_NAME);
        const collection = db.collection('products');
        const result = await collection.find({ '_id': new ObjectId(request.params.id) }).toArray();
        console.log(result);
        response.send(result);
        client.close();
    });
});

app.get('/search', (request, response) => {
    client.connect(async err => {

        let brand = request.query.brand;
        let price = request.query.price;
        let limit = request.query.limit;
        

        const db = client.db(MONGODB_DB_NAME);
        const collection = db.collection('products');
        const result = await collection.find({ 'brand': brand }, { 'price': { $lte: price } }).toArray();
        console.log(result);
        response.send(result);
        client.close();
    });
});


app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);


