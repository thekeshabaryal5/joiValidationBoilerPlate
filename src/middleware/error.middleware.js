const errorMiddleware = (err, req, res, next) => {
  console.log("reached");
  res.status(400).json({
    success: false,
    message: err.message,
  });
};

export default errorMiddleware;
