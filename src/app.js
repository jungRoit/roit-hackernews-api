import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import crossOriginRequestHandler from './middlewares/crossOriginRequestHandler';

const app = express();
const port = 7070;

app.use(crossOriginRequestHandler);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(routes);

app.listen(port, () => {
  console.log('Server started at: ' + port);
})