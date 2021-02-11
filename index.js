// JavaScript source code
const express = require('express');

const app = express();

const port = process.env.PORT || '3000';

var mongoClient = require("mongodb").MongoClient;
//mongoClient.connect("mongodb://stefandb4:TAgU7FrOvuXSy4rcjMxT1juHZaM99X5m53vgdcwTBqdkRgYIqDZNEMbCki0MCQrundU3pjduUBh61XOcqAtXBw%3D%3D@stefandb4.mongo.cosmos.azure.com:10255/?ssl=true&appName=@stefandb4@", function (err, client) {
//    client.close();
//});



//added below
//var MongoClient = require('mongodb').MongoClient;
//const CosmosClient = require("@azure/cosmos").CosmosClient;
//const client = new CosmosClient({ endpoint, key });
//var assert = require('assert');
//var ObjectId = require('mongodb').ObjectID;
//var url = 'mongodb://stefandb3:AI06RGXX1rx8AQh36oV4I9GwwInECpEkpCsCAVQc16ZpEUQACn96vrc3iOVA3acB6NTUmUeB2CUAoehI1DQa9g%3D%3D@stefandb3.mongo.cosmos.azure.com:10255/?ssl=true&appName=@stefandb3@';
var resString = 'Space4';

// Core module
//var core = require('mongodb-core'),
//    Instrumentation = require('./lib/apm');

// Set up the connect function
//var connect = require('./lib/mongo_client').connect;


//const mongoose = require('mongoose');
/**
* Set to Node.js native promises
* Per https://mongoosejs.com/docs/promises.html
*/
//mongoose.Promise = global.Promise;

//const env = require('./env/environment');

// eslint-disable-next-line max-len
//const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`;
const mongoUri = 'mongodb://stefandb3:AI06RGXX1rx8AQh36oV4I9GwwInECpEkpCsCAVQc16ZpEUQACn96vrc3iOVA3acB6NTUmUeB2CUAoehI1DQa9g%3D%3D@stefandb3.mongo.cosmos.azure.com:10255/?ssl=true&appName=@stefandb3@';


// mongoose.connect(mongoUri, { useMongoClient: true });












/*var getCustomers = function (db, callback) {
    var cursor = db.collection('customers').find();
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            resString = resString + doc.id + '   ' + doc.givenname;
        } else {
           // callback();
        }
    });
};
*/


//added above



app.get('/', (req, res) => {

    res.send('Your Express API is up and running! and finished this tutorial eller inte1?' + resString);

});

app.listen(port, () => {

    console.log(`listening at http://localhost:${port}`);

});
