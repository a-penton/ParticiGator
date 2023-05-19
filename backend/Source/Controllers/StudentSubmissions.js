// Function to enable CRUD operations with StudentSubmissions database
export function buildStudentSubmissionsControllers(databaseConnection) {
    const db = databaseConnection;
    
    return {
      getAll: async (req, res) => {
        const documents = await db.StudentSubmissions.find({}).toArray()
        return res.send(documents);
      },
      getById: async (req, res) => {
        const id = req.params.id;
        const documents = await db.StudentSubmissions.findOne({ id });
        if (documents === null) {
          return res.status(404).send('Could not find a user with those credentials. Please contact your instructor.');
        }
        return res.sendStatus(201);
      },
      create: async (req, res) => {
        const user = await db.StudentSubmissions.findOne({$and: [{'id': req.body.data.id}, {'question': req.body.data.question }]});
        if (user == null) {
          await db.StudentSubmissions.insertOne(req.body.data);
          return res.sendStatus(201);
        }
        return res.status(401).json({ message: 'User has already submitted.' });
      },
      update: async (req, res) => {
        return res.sendStatus(501)
      },
      delete: async (req, res) => {
        const id = req.params.id;
        await db.StudentSubmissions.deleteOne({ id });
        return res.sendStatus(200);
      }
    }
  }