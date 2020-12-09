var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://dbsuer:High1750@cluster0.bvylu.mongodb.net/confDB?retryWrites=true&w=majority";
var url = 'mongodb://ecms:evIgpuK2HtdTVS0amk5uZoXSsCvdu9g5448zQ7ejlfCcoff3cOc8awcojJXpA795oMSwX905qQbhD7Qz1I0anQ==@ecms.mongo.cosmos.azure.com:10255/?ssl=true&appName=@ecms@';


var insertDocument = function(db, doc, callback) {
  db.collection('conferences').insertOne(doc, function(err,result){
    console.log("Inserted a document into the families collection.");
    callback();
  } );
  };
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const conference = req.body;
    console.log(conference);
    MongoClient.connect(url, function(err, client) {
      var db = client.db('cmsdb');
      insertDocument(db,conference, function() {
          client.close();
      
          
      });
      })
    context.res = {
        body: {
          text: "Hello from the user"
        }
      };
}