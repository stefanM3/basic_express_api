// JavaScript source code
const express = require('express');

const app = express();

const port = process.env.PORT || '3000';

//added below
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://stefandb3:AI06RGXX1rx8AQh36oV4I9GwwInECpEkpCsCAVQc16ZpEUQACn96vrc3iOVA3acB6NTUmUeB2CUAoehI1DQa9g%3D%3D@stefandb3.mongo.cosmos.azure.com:10255/?ssl=true&appName=@stefandb3@';
var resString = "";

var getCustomers = function (db, callback) {
    var cursor = db.collection('customers').find();
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            resString = resString + doc.id + "   " + doc.givenname
        } else {
            callback();
        }
    });
};


//added above



app.get('/', (req, res) => {

    res.send('Your Express API is up and running! and finished this tutorial eller?' + resString);

});

app.listen(port, () => {

    console.log(`listening at http://localhost:${port}`);

});
