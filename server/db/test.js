const jsonData = require("C:/Users/maxim/OneDrive/Documents/S8/Web Application Architecture/clear-fashion/server/products.json");
const products = [jsonData];


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://maxime0100:Guitare60@cluster0.nbakx.mongodb.net/Cluster0?retryWrites=true&w=majority";
const MONGODB_DB_NAME = 'clear-fashion';


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(async err => {
    // perform actions on the collection object

    const db = client.db(MONGODB_DB_NAME);
    const collection = db.collection('products');
    //const result = await collection.insertMany(products, { 'ordered': false });
    const result = await collection.find({ 'price': { $gt: 20 } }).toArray();
    console.log(result);

    client.close();
});


