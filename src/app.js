import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = 9090;

app.use(bodyParser.json());

app.use(routes);

// app.get('/',(req,res)=> {
//   res.send('ApI works');
// });

app.listen(port,()=> {
  console.log('Server started at: '+port);
})