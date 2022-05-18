import colors from 'colors';

const errorHandler = (err, req, res, next) => {
  console.log(`ERROR ====> ${err.message} `.bgRed.white);
  res.status(500).send('The server has encountered an error');
};

const notFoundHandler = (req, res, next) => {
  console.log(`NOT FOUND ====> ${req.originalUrl} `.blue);
  res.status(404).send('The resource was not found on this server');
  next();
};

export { errorHandler, notFoundHandler };
