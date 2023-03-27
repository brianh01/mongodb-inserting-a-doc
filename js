const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Insert a document into the collection
  db.collection('users').insertOne({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  }, function(err, result) {
    console.log("Inserted a document into the users collection.");
    console.log(result);
  });

  // Close the connection
  client.close();
});
