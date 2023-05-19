import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { connectToDatabase } from './Database';
import { buildUsersControllers } from './Controllers/Users';
import { buildQuestionsControllers } from './Controllers/Questions';
import { buildStudentSubmissionsControllers } from './Controllers/StudentSubmissions';

async function main() {
  const app = express();
  app.use(cors()); // Allow all CORS requests.
  app.use(bodyParser.json()); // Parse JSON bodies.
  app.use(morgan('dev')); // Log HTTP requests.
  
  const databaseConnection = await connectToDatabase();
  const usersControllers = buildUsersControllers(databaseConnection);
  const questionsControllers = buildQuestionsControllers(databaseConnection);
  const submissionsControllers = buildStudentSubmissionsControllers(databaseConnection);

  app.get('/users', usersControllers.getAll);
  app.get('/users/:id', usersControllers.getById);
  app.post('/users', usersControllers.create);
  app.put('/users/:id', usersControllers.update);
  app.delete('/users/:id', usersControllers.delete);

  app.get('/questions', questionsControllers.getAll);
  app.get('/questions/:numID', questionsControllers.getByTitle);
  app.post('/questions', questionsControllers.create);
  app.put('/questions/:id', questionsControllers.update);
  app.delete('/questions/:id', questionsControllers.delete);

  app.get('/submissions', submissionsControllers.getAll);
  app.get('/submissions/:id', submissionsControllers.getById);
  app.post('/submissions', submissionsControllers.create);
  app.put('/submissions/:id', submissionsControllers.update);
  app.delete('/submissions/:id', submissionsControllers.delete);
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

  //module.exports = app;
};

main();