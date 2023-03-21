const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')

async function main() {
  app.use(cors());
  app.use(bodyParser.json());

  const uri = "mongodb+srv://robinfintz:z7rITOGo3PY25vMw@cluster0.szon0.mongodb.net/?retryWrites=true&w=majority";
  // Replace <username>, <password>, <cluster-address>, and <database-name> with your own values.
  
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
  } catch (error) {
    console.error(error);
    return;
  }
  
  const collection = client.db("ParticiGator").collection("Students");
  // Replace "test" and "users" with the names of your own database and collection.
  
  // Define an endpoint to retrieve all users from the database.
  app.get('/users', async (req, res) => {
    console.log("GET /users");
    const documents = await collection.find({}).toArray();
    return res.send(documents);
  });
  
  // Define an endpoint to retrieve a user by their ID.
  app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const documents = await collection.findOne({ id });
    if (documents === null) {
      return res.status(404).send('User not found');
    }
    return res.send(documents);
  });
  
  app.post('/users', async (req, res) => {
    // Great Validation Library - Zod
    await collection.insertOne(req.body);
    return res.sendStatus(201);
  });

  app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    await collection.deleteOne({ id });
    return res.sendStatus(200);
  });
  
  app.get('/', (req, res) => {
    console.log(`GET ${req.path}}`)
    res.send('Oop!');
  })

  // Start the server.
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
};


// HTTP requests
/* fetch('http://localhost:3000/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error)); */

main();