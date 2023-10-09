const httpStatus = require("http-status");
const userService = require("../../services/user");
module.exports = async (req, res, next) => {
  try {
    const data = await userService.showUser(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Success",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
