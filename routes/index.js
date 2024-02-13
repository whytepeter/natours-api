const tourRouter = require('./tourRoutes');
const userRouter = require('./userRoutes');

const registerRoutes = (app) => {
  app.use('/api/v1/tours', tourRouter);
  app.use('/api/v1/users', userRouter);
};

module.exports = registerRoutes;
