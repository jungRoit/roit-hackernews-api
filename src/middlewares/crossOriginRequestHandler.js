

const crossOriginRequestHandler = (req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Auth');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
}

export default crossOriginRequestHandler;