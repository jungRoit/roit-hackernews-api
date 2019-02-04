import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(routes);

app.listen(port,()=> {
  console.log('Server started at: '+port);
})