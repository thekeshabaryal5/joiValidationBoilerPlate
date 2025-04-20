const validate = (validationRule) => {
  return (req, res, next) => {
    let data = validationRule.validate(req.body);
    let error = data.error;
    if (error) {
      next(error);
    } else {
      next();
    }
  };
};
export default validate;
