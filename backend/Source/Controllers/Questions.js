export function buildQuestionsControllers(databaseConnection) {
    const db = databaseConnection;
    
    return {
      getAll: async (req, res) => {
        const documents = await db.Questions.find({}).toArray()
        return res.send(documents);
      },
      getByTitle: async (req, res) => {
        const title = req.params.numID;
        console.log("ID" + title)
        const documents = await db.Questions.findOne({ questionTitle: 'Quiz ' + title },);
        console.log(documents);
        if (documents === null) {
          return res.status(404).send('Question not found');
        }
        else {
            console.log(documents); 
            return res.send(documents)};
      },
      create: async (req, res) => {
        await db.Questions.insertOne(req.body);
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