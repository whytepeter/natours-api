const AppError = require("../utils/appError");
const globalErrorHandler = require("../controllers/errorController");
const tourRouter = require("./tourRoutes");
const userRouter = require("./userRoutes");

const registerRoutes = (app) => {
  app.use("/api/v1/tours", tourRouter);
  app.use("/api/v1/users", userRouter);

  app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
  });

  app.use(globalErrorHandler);
};

module.exports = registerRoutes;
