// Function to enable CRUD operations with Users (Students) database
export function buildUsersControllers(databaseConnection) {
  const db = databaseConnection;
  
  return {
    getAll: async (req, res) => {
      const documents = await db.Students.find({}).toArray()
      return res.send(documents);
    },
    getById: async (req, res) => {
      const id = req.params.id;
      const documents = await db.Students.findOne({ id });
      if (documents === null) {
        return res.status(404).send('Could not find a user with those credentials. Please contact your instructor.');
      }
      else{
        return res.status(201).send(documents);
      }
    },
    create: async (req, res) => {
      await db.Students.insertOne(req.body);
      return res.sendStatus(201);
    },
    update: async (req, res) => {
      return res.sendStatus(501)
    },
    delete: async (req, res) => {
      const id = req.params.id;
      await collection.deleteOne({ id });
      return res.sendStatus(200);
    }
  }
}